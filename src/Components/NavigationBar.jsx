import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';

const NavigationBar = ({ feeds, tags }) => {
  return (
    <Navbar id="NavBar">
      <Navbar.Brand>jrss</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Front Page</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
          <NavDropdown title="tags" id="tagsDropdown">
            {tags.map(tag => (
              <NavDropdown.Item key={tag} href={`/tags/${tag}`}>
                {tag}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="Feeds" id="FeedsDropdown">
            {Object.keys(feeds).map(feed => (
              <NavDropdown.Item key={feed} href={`/feeds/${feed}`}>
                {feeds[feed].displayName}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
