import React, { Component } from 'react';
// components
import FeedCard from './FeedCard';
// utilities
import { API } from 'aws-amplify';
import { activityToggle } from '../utilities';

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
              active={feed.active}
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
    const feeds = activityToggle(feedName, this.state.feeds, 'displayName');
    return this.setState({ feeds });
  };

  mapFeeds = rawFeeds => {
    return rawFeeds.map(feed => ({
      ...feed,
      active: false,
    }));
  };
}

export default ManageFeeds;
