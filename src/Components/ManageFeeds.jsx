import React, { Component } from 'react';
import FeedCard from './FeedCard';
import { API } from 'aws-amplify';

class ManageFeeds extends Component {
  state = {
    feeds: null,
  };
  render() {
    const { feeds } = this.state;
    return (
      <div
        id="settingsCards"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {feeds &&
          feeds.map(feed => (
            <FeedCard
              key={feed.feedID}
              feedName={feed.displayName}
              feed={feed}
              // unsubscribeFromFeed={unsubscribeFromFeed}
              // deleteTag={deleteTag}
              // addTag={addTag}
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
