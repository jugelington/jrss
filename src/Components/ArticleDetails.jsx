import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import { imageExtractor } from '../utilities';

const ArticleDetails = ({
  article,
  article: { title, creator, author, pubDate, contentSnippet, link, source },
}) => {
  const image = imageExtractor(article);
  return (
    <Card
      style={{ width: '50rem' }}
      className="feed-card"
      variant="dark"
      bg="dark"
      text="light"
      border="secondary"
    >
      <Card.Img
        variant="bottom"
        src={image}
        style={{
          width: '10rem',
          borderRadius: '10px',
          position: 'absolute',
          right: 0,
        }}
      />
      <Card.Body>
        <Card.Subtitle>
          {source} | {pubDate}
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{creator || author}</Card.Subtitle>
        <Card.Text>
          {contentSnippet.substring(0, contentSnippet.indexOf('.', 500) + 1)}
        </Card.Text>
        <Button href={link} variant="secondary">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleDetails;
