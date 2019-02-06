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
import ArticleModal from './Components/ArticleModal';
import SignUp from './Components/SignUp';

class App extends Component {
  state = {
    username: 'test_user',
    feeds: [],
    articles: [],
    loading: true,
    tags: [],
    modalVisible: false,
    modalArticle: null,
    isAuthenticated: false,
    isAuthenticating: true,
  };

  render() {
    const {
      feeds,
      tags,
      articles,
      loading,
      modalVisible,
      modalArticle,
      isAuthenticated,
      isAuthenticating,
      username,
    } = this.state;
    return (
      !isAuthenticating && (
        <main className="App">
          <header className="App-header" />
          <NavigationBar
            feeds={feeds}
            tags={tags}
            isAuthenticated={isAuthenticated}
            handleLogout={this.handleLogout}
            username={username}
          />
          {modalVisible && (
            <ArticleModal
              article={modalArticle}
              closeModal={this.closeModal}
              modalVisible={modalVisible}
            />
          )}
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
                openModal={this.openModal}
              />
              <FeedView
                isAuthenticated={isAuthenticated}
                path="/feeds/:feedName"
                articles={articles}
                loading={loading}
                openModal={this.openModal}
              />
              <FeedView
                isAuthenticated={isAuthenticated}
                path="/tags/:tagName"
                articles={articles}
                loading={loading}
                openModal={this.openModal}
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
      )
    );
  }

  async componentDidMount() {
    this.authFunc();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.authFunc();
    }
  }

  authFunc = async () => {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
      const feeds = await this.getFeeds();
      this.setState({ feeds });
      this.fetchFeeds();
      this.getTags();
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    const currUser = await Auth.currentAuthenticatedUser();
    this.setState({
      isAuthenticating: false,
      username: currUser.attributes.email,
    });
  };

  fetchFeeds = () => {
    const feeds = this.cloneFeeds();
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

  cloneFeeds = () => {
    return JSON.parse(JSON.stringify(this.state.feeds));
  };

  cloneTags = () => {
    return JSON.parse(JSON.stringify(this.state.tags));
  };
  openModal = article => {
    this.setState({ modalVisible: true, modalArticle: article });
  };

  closeModal = () => {
    this.setState({ modalVisible: false, modalArticle: null });
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
