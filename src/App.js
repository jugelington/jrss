import React, { Component } from 'react';
import { Router } from '@reach/router';
import NavigationBar from './Components/NavigationBar';
import FrontPage from './Components/FrontPage';
import Settings from './Components/Settings';
import Feed from './Components/Feed';

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
      jezebel: { displayName: 'Jezebel', url: 'https://jezebel.com/rss' },
      stereogum: {
        displayName: 'Stereogum',
        url: 'https://www.stereogum.com/feed/',
        tags: ['Music, Culture'],
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
          <Settings
            path="/settings"
            feeds={this.state.feeds}
            tags={this.state.tags}
          />
          <Feed path="/feeds/:feedName" feeds={this.state.feeds} />
        </Router>
      </div>
    );
  }
}

export default App;
