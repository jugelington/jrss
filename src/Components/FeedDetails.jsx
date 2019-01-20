import React from 'react';
import Card from 'react-bootstrap/lib/Card';

const FeedDetails = ({ feed }) => {
  return (
    <Card style={{ width: '25rem' }} className="feed-card">
      <Card.Body>
        <Card.Title>{feed.displayName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Card.Link href={feed.url}>{feed.url}</Card.Link>
        </Card.Subtitle>
        <Card.Subtitle>Tags:</Card.Subtitle>
        <Card.Text>{feed.tags}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedDetails;
