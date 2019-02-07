import React from 'react';
// react-bootstrap
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Container from 'react-bootstrap/lib/Container';
// css
import '../CSS/NavigationBar.css';

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
    <Navbar id="NavigationBar" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand>jrss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">Front Page</Nav.Link>
          <NavDropdown title="Tags" id="tagsDropdown">
            {tags.map(tag => (
              <NavDropdown.Item key={tag} href={`/tags/${tag}`}>
                {tag}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="Feeds" id="FeedsDropdown">
            {feedsArr.map(feed => (
              <NavDropdown.Item key={feed} href={`/feeds/${feed}`}>
                {feeds[feed].displayName}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item key="manageFeeds" href="/settings/managefeeds">
              Manage Feeds
            </NavDropdown.Item>
            <NavDropdown.Item key="addFeed" href="/settings/addfeed">
              Add Feed
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={handleLogout} href="/login">
            Log Out
          </Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            {username}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  ) : (
    <Navbar id="NavigationBar" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand>jrss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
