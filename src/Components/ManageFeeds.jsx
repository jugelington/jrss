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
              key={feed.feedID}
              feedName={feed.displayName}
              feed={feed}
            />
          ))}
      </div>
    );
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) return;
    try {
      const feeds = await this.getFeeds();
      this.setState({ feeds });
    } catch (error) {
      alert(error);
    }
  }

  getFeeds = () => {
    return API.get('jrss-api', '/feeds');
  };
}

export default ManageFeeds;
