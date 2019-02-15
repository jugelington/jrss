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
      <div className="navbtn navitem">
        <a href="/">
          <strong>JRSS</strong>
        </a>
      </div>
      <div className="dropdown">
        <button className="dropbtn navitem">Tags</button>
        <div className="dropdown-content">
          {tags.map(tag => (
            <a href={`/tags/${tag}`}>{tag}</a>
          ))}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn navitem">Feeds</button>
        <div className="dropdown-content">
          {feedsArr.map(feed => (
            <a href={`/feeds/${feed}`}>{feeds[feed].displayName}</a>
          ))}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn navitem">Settings</button>
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
      <div className="navbtn navitem">
        <a href="/">
          <strong>JRSS</strong>
        </a>
      </div>
      <div className="navbtn navitem">
        <a href="/login">
          <strong>Login </strong>
        </a>
      </div>
      <div className="navbtn navitem">
        <a href="/signup">
          <strong>Sign Up</strong>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
