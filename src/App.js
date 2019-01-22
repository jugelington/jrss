import React, { Component } from 'react';
import { Router } from '@reach/router';
import NavigationBar from './Components/NavigationBar';
import FrontPage from './Components/FrontPage';
import ManageFeeds from './Components/ManageFeeds';
import Feed from './Components/Feed';
import AddFeed from './Components/AddFeed';

class App extends Component {
  state = {
    feed: 'ALL',
    feeds: {
      guardian: {
        displayName: 'Guardian',
        url: 'https://www.theguardian.com/world/rss',
        tags: ['Politics'],
      },
      verge: {
        displayName: 'Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        tags: ['Tech'],
      },
      jezebel: {
        displayName: 'Jezebel',
        url: 'https://jezebel.com/rss',
        tags: ['bar'],
      },
      stereogum: {
        displayName: 'Stereogum',
        url: 'https://www.stereogum.com/feed/',
        tags: ['Music', 'Culture'],
      },
    },
    tag: 'ALL',
    tags: ['Music', 'Culture', 'Tech', 'Politics'],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <NavigationBar feeds={this.state.feeds} tags={this.state.tags} />
        <Router>
          <FrontPage path="/" feeds={this.state.feeds} />
          <ManageFeeds
            path="/settings/managefeeds"
            feeds={this.state.feeds}
            tags={this.state.tags}
            unsubscribeFromFeed={this.unsubscribeFromFeed}
            deleteTag={this.deleteTag}
          />
          <AddFeed
            path="/settings/addfeed"
            subscribeToFeed={this.subscribeToFeed}
          />
          <Feed path="/feeds/:feedName" feeds={this.state.feeds} />
        </Router>
      </div>
    );
  }

  componentDidUpdate() {
    this.saveState();
  }

  componentDidMount() {
    const savedState = localStorage.getItem('savedState');
    if (savedState) {
      this.setState(JSON.parse(savedState));
    }
  }

  saveState = () => {
    localStorage.setItem('savedState', JSON.stringify(this.state));
  };

  subscribeToFeed = (name, url, tags = []) => {
    const obj = {
      displayName: name,
      url: url,
      tags: tags,
    };
    const formattedName = name
      .split(' ')
      .join('')
      .toLowerCase();
    const newFeeds = JSON.parse(JSON.stringify(this.state.feeds));
    newFeeds[formattedName] = obj;
    this.setState({
      feeds: newFeeds,
    });
  };

  unsubscribeFromFeed = feedName => {
    const newFeeds = JSON.parse(JSON.stringify(this.state.feeds));
    delete newFeeds[feedName];
    this.setState({ feeds: newFeeds });
  };

  deleteTag = (feed, tag) => {
    const newFeeds = JSON.parse(JSON.stringify(this.state.feeds));
    newFeeds[feed].tags = newFeeds[feed].tags.filter(el => el !== tag);
    this.setState({ feeds: newFeeds });
  };
}

export default App;
