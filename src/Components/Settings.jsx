import React from 'react';
import FeedDetails from './FeedDetails';

const Settings = ({ feeds, tags }) => {
  const feedsArr = Object.keys(feeds).sort((a, b) => {
    return a.displayName > b.displayName ? 1 : -1;
  });

  return (
    <div>
      <h1>Settings</h1>
      <div id="settingsCards">
        {feedsArr.map(feed => (
          <FeedDetails key={feed} feed={feeds[feed]} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
