import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card';
import Badge from 'react-bootstrap/lib/Badge';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Form from 'react-bootstrap/lib/Form';
import Alert from 'react-bootstrap/lib/Alert';
import edit from '../Images/edit.png';

class FeedCard extends Component {
  state = {};

  render() {
    const { feed } = this.props;
    return (
      <Card
        style={{
          margin: '5px',
          textAlign: 'center',
          width: '400px',
        }}
        className="feed-card"
        variant="dark"
        bg="dark"
        text="light"
        border="secondary"
      >
        <Card.Header>
          <Card.Title>
            {feed.displayName}
            <img
              src={edit}
              width="24px"
              alt="edit"
              style={{ float: 'right' }}
            />
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>URL:</Card.Subtitle>
          <Card.Text>
            <a href={feed.url}>{feed.url}</a>
          </Card.Text>
          <Card.Subtitle>Tags:</Card.Subtitle>
          <Card.Text>{feed.tags.join(' ')}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default FeedCard;
