import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Container from 'react-bootstrap/lib/Container';
import '../CSS/NavigationBar.css';

const NavigationBar = ({ feeds, tags }) => {
  const feedsArr = Object.keys(feeds).sort();
  tags.sort();
  return (
    <Navbar id="NavigationBar" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand>jrss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">front page</Nav.Link>
          <NavDropdown title="tags" id="tagsDropdown">
            {tags.map(tag => (
              <NavDropdown.Item key={tag} href={`/tags/${tag}`}>
                {tag}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="feeds" id="FeedsDropdown">
            {feedsArr.map(feed => (
              <NavDropdown.Item key={feed} href={`/feeds/${feed}`}>
                {feeds[feed].displayName}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item key="manageFeeds" href="/settings/managefeeds">
              manage feeds
            </NavDropdown.Item>
            <NavDropdown.Item key="addFeed" href="/settings/addfeed">
              add feed
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
