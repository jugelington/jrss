import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';

const FeedDetails = ({ feed, unsubscribeFromFeed, feedName }) => {
  return (
    <Card
      style={{
        width: '50vw',
        margin: '5px',
        textAlign: 'center',
      }}
      className="feed-card"
      variant="dark"
      bg="dark"
      text="light"
      border="secondary"
    >
      <Card.Header>
        <Card.Title>{feed.displayName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Card.Link href={feed.url}>{feed.url}</Card.Link>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Tags:</Card.Subtitle>
        <Card.Text>{feed.tags}</Card.Text>
        <Button
          variant="danger"
          onClick={() => {
            return unsubscribeFromFeed(feedName);
          }}
        >
          Unsubscribe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FeedDetails;
