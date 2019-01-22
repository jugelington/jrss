import React from 'react';
import FeedDetails from './FeedDetails';

const ManageFeeds = ({ feeds, tags, unsubscribeFromFeed }) => {
  const feedsArr = Object.keys(feeds).sort((a, b) => {
    return a.displayName > b.displayName ? 1 : -1;
  });

  return (
    <div>
      <h1>ManageFeeds</h1>
      <div id="settingsCards">
        {feedsArr.map(feed => (
          <FeedDetails
            key={feed}
            feedName={feed}
            feed={feeds[feed]}
            unsubscribeFromFeed={unsubscribeFromFeed}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageFeeds;
