import React from 'react';
import FeedCard from './FeedCard';

const ManageFeeds = ({ feeds, unsubscribeFromFeed, deleteTag, addTag }) => {
  const feedsArr = Object.keys(feeds).sort();

  return (
    <div
      id="settingsCards"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {feedsArr.map(feed => (
        <FeedCard
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
