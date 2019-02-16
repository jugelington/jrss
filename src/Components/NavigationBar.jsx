import React from 'react';
// css
import '../CSS/NavigationBar.css';
// images

const NavigationBar = ({
  feeds,
  tags,
  isAuthenticated,
  handleLogout,
  username,
}) => {
  const feedsArr = Object.keys(feeds).sort((a, b) =>
    b.displayName - a.displayName > 0 ? 1 : -1,
  );
  tags.sort((a, b) => (b.toUpperCase() - a.toUpperCase() > 0 ? 1 : -1));
  return isAuthenticated ? (
    <div className="navigationbar">
      <a href="/">
        <div className="navbtn navitem">
          <strong>JRSS</strong>
        </div>
      </a>
      <div className="dropdown">
        <button className="dropbtn ">Tags</button>
        <div className="dropdown-content">
          {tags.map(tag => (
            <a href={`/tags/${tag}`}>{tag}</a>
          ))}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn ">Feeds</button>
        <div className="dropdown-content">
          {feedsArr.map(feed => (
            <a href={`/feeds/${feed}`}>{feeds[feed].displayName}</a>
          ))}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn ">Settings</button>
        <div className="dropdown-content">
          <a href="/settings/managefeeds">Manage Feeds</a>
          <a href="/settings/addfeed">Add Feed</a>
          <a href="/" onClick={handleLogout}>
            Log Out ({username.substring(0, username.indexOf('@'))})
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="navigationbar">
      <a href="/">
        <div className="navbtn navitem">
          <strong>JRSS</strong>
        </div>
      </a>
      <a href="/login">
        <div className="navbtn-b navitem-b">
          <strong>Login </strong>
        </div>
      </a>
      <a href="/signup">
        <div className="navbtn-b navitem-b ">
          <strong>Sign Up</strong>
        </div>
      </a>
    </div>
  );
};

export default NavigationBar;
