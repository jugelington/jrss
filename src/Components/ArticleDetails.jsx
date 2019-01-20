import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';

const ArticleDetails = ({
  article: { title, creator, author, pubDate, contentSnippet, link },
}) => {
  return (
    <Card style={{ width: '50rem' }} className="feed-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {creator || author}
          <br />
          {pubDate}
        </Card.Subtitle>
        <Card.Text>{contentSnippet}</Card.Text>
        <Button href={link}>Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleDetails;
