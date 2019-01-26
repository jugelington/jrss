import React, { Component } from 'react';
import { Router } from '@reach/router';
import NavigationBar from './Components/NavigationBar';
import FeedView from './Components/FeedView';
import ManageFeeds from './Components/ManageFeeds';
import AddFeed from './Components/AddFeed';
import _ from 'lodash';
import { rssParser } from './utilities';

class App extends Component {
  state = {
    feeds: {
      time: {
        displayName: 'time',
        url: 'https://feeds.feedburner.com/time/topstories?format=xml',
        tags: ['politics'],
      },
      guardian: {
        displayName: 'Guardian',
        url: 'https://www.theguardian.com/world/rss',
        tags: ['politics'],
      },
      verge: {
        displayName: 'Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        tags: ['tech'],
      },
      jezebel: {
        displayName: 'Jezebel',
        url: 'https://jezebel.com/rss',
        tags: ['culture'],
      },
      stereogum: {
        displayName: 'Stereogum',
        url: 'https://www.stereogum.com/feed/',
        tags: ['music', 'culture'],
      },
    },
    tags: ['music', 'culture', 'tech', 'politics'],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <NavigationBar
          feeds={this.state.feeds}
          tags={this.state.tags}
          removeRedundantTags={this.removeRedundantTags}
        />
        <Router>
          <FeedView path="/" feeds={this.state.feeds} />
          <FeedView path="/feeds/:feedName" feeds={this.state.feeds} />
          <FeedView path="/tags/:tagName" feeds={this.state.feeds} />
          <ManageFeeds
            path="/settings/managefeeds"
            feeds={this.state.feeds}
            tags={this.state.tags}
            unsubscribeFromFeed={this.unsubscribeFromFeed}
            deleteTag={this.deleteTag}
            addTag={this.addTag}
          />
          <AddFeed
            path="/settings/addfeed"
            subscribeToFeed={this.subscribeToFeed}
          />
        </Router>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    this.saveState();
  }

  componentDidMount() {
    const savedState = localStorage.getItem('savedState');
    if (savedState) {
      this.setState(JSON.parse(savedState));
    }
    console.log(this.fetchFeeds());
  }

  saveState = () => {
    localStorage.setItem('savedState', JSON.stringify(this.state));
  };

  fetchFeeds = () => {
    const newFeeds = this.cloneFeeds();
    return Promise.all(
      Object.keys(this.state.feeds).map(feed => {
        return rssParser(this.state.feeds, feed).then(articles => {
          return (newFeeds[feed].articles = articles);
        });
      }),
    ).then(() => this.setState({ feeds: newFeeds }));
  };

  subscribeToFeed = (name, url, tags = []) => {
    const obj = {
      displayName: name,
      url: url,
      tags: tags,
    };
    const formattedName = name.replace(/\s/g, '_');
    const newFeeds = this.cloneFeeds();
    newFeeds[formattedName] = obj;
    this.setState({
      feeds: newFeeds,
    });
  };

  unsubscribeFromFeed = feedName => {
    const newFeeds = this.cloneFeeds();
    delete newFeeds[feedName];
    this.setState({ feeds: newFeeds });
  };

  deleteTag = (feed, tag) => {
    const newFeeds = this.cloneFeeds();
    newFeeds[feed].tags = newFeeds[feed].tags.filter(el => el !== tag);
    this.setState({ feeds: newFeeds });
  };

  addTag = (feed, tag) => {
    const newFeeds = this.cloneFeeds();
    const newTags = this.cloneTags();
    if (!newTags.includes(tag)) newTags.push(tag);
    newFeeds[feed].tags.push(tag);
    this.setState({ feeds: newFeeds, tags: newTags });
  };

  cloneFeeds = () => {
    return JSON.parse(JSON.stringify(this.state.feeds));
  };

  cloneTags = () => {
    return JSON.parse(JSON.stringify(this.state.tags));
  };

  removeRedundantTags = () => {
    const currentlyUsedTags = _.flatten(
      Object.keys(this.state.feeds).map(feed => this.state.feeds[feed].tags),
    );
    const filteredTags = this.cloneTags().filter(tag =>
      currentlyUsedTags.includes(tag),
    );
    this.setState({ tags: filteredTags });
  };
}

export default App;
