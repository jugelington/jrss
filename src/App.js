import React, { Component } from 'react';
import { Router } from '@reach/router';
import NavigationBar from './Components/NavigationBar';
import { Auth } from 'aws-amplify';
import _ from 'lodash';
import { API } from 'aws-amplify';

import FeedView from './Components/FeedView';
import ManageFeeds from './Components/ManageFeeds';
import AddFeed from './Components/AddFeed';
import Login from './Components/Login';
import { rssParser } from './utilities';
import SignUp from './Components/SignUp';

class App extends Component {
  state = {
    username: '',
    feeds: [],
    articles: [],
    loading: true,
    tags: [],
    isAuthenticated: false,
    isAuthenticating: true,
  };

  render() {
    const {
      feeds,
      tags,
      articles,
      loading,
      isAuthenticated,
      isAuthenticating,
      username,
    } = this.state;
    return !isAuthenticating ? (
      <main className="App">
        <header className="App-header" />
        <NavigationBar
          feeds={feeds}
          tags={tags}
          isAuthenticated={isAuthenticated}
          handleLogout={this.handleLogout}
          username={username}
        />
        {isAuthenticated ? (
          <Router>
            <Login
              path="/login"
              isAuthenticated={isAuthenticated}
              userHasAuthenticated={this.userHasAuthenticated}
            />
            <FeedView
              isAuthenticated={isAuthenticated}
              path="/"
              articles={articles}
              loading={loading}
            />
            <FeedView
              isAuthenticated={isAuthenticated}
              path="/feeds/:feedName"
              articles={articles}
              loading={loading}
            />
            <FeedView
              isAuthenticated={isAuthenticated}
              path="/tags/:tagName"
              articles={articles}
              loading={loading}
            />
            <ManageFeeds
              isAuthenticated={isAuthenticated}
              path="/settings/managefeeds"
              feeds={feeds}
              unsubscribeFromFeed={this.unsubscribeFromFeed}
              deleteTag={this.deleteTag}
              addTag={this.addTag}
            />
            <AddFeed
              isAuthenticated={isAuthenticated}
              path="/settings/addfeed"
              subscribeToFeed={this.subscribeToFeed}
            />
          </Router>
        ) : (
          <Router>
            <SignUp
              path="/signup"
              userHasAuthenticated={this.userHasAuthenticated}
            />
            <Login
              path="*"
              isAuthenticated={isAuthenticated}
              userHasAuthenticated={this.userHasAuthenticated}
            />
          </Router>
        )}
      </main>
    ) : (
      <NavigationBar
        feeds={[]}
        tags={[]}
        isAuthenticated={isAuthenticated}
        username={''}
        handleLogout={() => {
          alert('Error! Try again.');
        }}
      />
    );
  }

  async componentDidMount() {
    await this.authorize();
    const feeds = await this.getFeeds();
    const currUser = await Auth.currentAuthenticatedUser();
    this.setState({ feeds, username: currUser.attributes.email });
    this.fetchFeeds();
    this.getTags();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.authorize();
    }
  }

  authorize = async () => {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({
      isAuthenticating: false,
    });
  };

  fetchFeeds = () => {
    const { feeds } = this.state;
    return Promise.all(
      Object.keys(feeds).map(feedName => {
        return rssParser(feeds, feedName)
          .then(articles => {
            return (feeds[feedName].articles = articles);
          })
          .catch(err =>
            console.log(
              `error caused by feed: ${feedName}\nInside fetchFeeds() .map:\n${err}`,
            ),
          );
      }),
    )
      .then(articles => {
        const flattenedAndSortedArticles = _.flatten(articles).sort((a, b) =>
          a.isoDate < b.isoDate ? 1 : -1,
        );
        return this.setState({
          articles: flattenedAndSortedArticles,
          loading: false,
        });
      })
      .catch(err => console.log(`fetchFeeds() error outside .map`, err));
  };

  getFeeds = () => {
    return API.get('jrss-api', '/feeds');
  };

  getTags = () => {
    const tags = _.flatten(this.state.feeds.map(feed => feed.tags));
    this.setState({ tags: _.uniq(tags) });
  };

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async () => {
    await Auth.signOut();
    this.setState({ isAuthenticated: false });
  };
}

export default App;
