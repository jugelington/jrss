import React from 'react';
import FeedDetails from './FeedDetails';

const ManageFeeds = ({ feeds, unsubscribeFromFeed, deleteTag, addTag }) => {
  const feedsArr = Object.keys(feeds).sort();

  return (
    <div id="settingsCards">
      {feedsArr.map(feed => (
        <FeedDetails
          key={feed}
          feedName={feed}
          feed={feeds[feed]}
          unsubscribeFromFeed={unsubscribeFromFeed}
          deleteTag={deleteTag}
          addTag={addTag}
        />
      ))}
    </div>
  );
};

export default ManageFeeds;
