import React, { Component } from 'react';
// components
import FeedCard from './FeedCard';
// utilities
import { API } from 'aws-amplify';

class ManageFeeds extends Component {
  state = {
    feeds: null,
  };
  render() {
    const { feeds } = this.state;
    return (
      <div className="feed-cards-container">
        {feeds &&
          feeds.map(feed => (
            <FeedCard
              key={feed.displayName}
              feed={feed}
              editing={feed.editing}
              toggleActiveFeed={this.toggleActiveFeed}
            />
          ))}
      </div>
    );
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) return;
    try {
      const rawFeeds = await this.getFeeds();
      const feeds = this.mapFeeds(rawFeeds);
      this.setState({ feeds });
    } catch (error) {
      alert(error);
    }
  }

  getFeeds = () => {
    return API.get('jrss-api', '/feeds');
  };

  toggleActiveFeed = feedName => {
    const feeds = this.state.feeds.map(feed => {
      if (feed.displayName === feedName) {
        return feed.editing
          ? { ...feed, editing: false }
          : { ...feed, editing: true };
      } else {
        return { ...feed, editing: false };
      }
    });
    return this.setState({ feeds });
  };

  mapFeeds = rawFeeds => {
    return rawFeeds.map(feed => ({
      ...feed,
      editing: false,
    }));
  };
}

export default ManageFeeds;
