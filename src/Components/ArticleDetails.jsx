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
      style={{
        width: '90vw',
        margin: '5px',
        textAlign: 'center',
        display: 'grid',
        gridTemplateColumns: '20% 80%',
      }}
      className="feed-card"
      variant="dark"
      bg="dark"
      text="light"
      border="secondary"
    >
      <Card.Img
        src={image}
        style={{
          maxHeight: 'auto',
          maxWidth: '80%',
          gridColumnStart: '1',
          position: 'relative',
          top: '25%',
          padding: '5px',
        }}
      />
      <Card.Body style={{ gridColumnStart: '2' }}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{source}</Card.Subtitle>
        </Card.Header>
        <Card.Text>
          {contentSnippet.substring(0, contentSnippet.indexOf('.', 500) + 1) ||
            contentSnippet}
        </Card.Text>
        <Button href={link} variant="secondary">
          Read More
        </Button>
      </Card.Body>
      <Card.Footer style={{ gridColumnStart: '2' }}>
        {creator || author}
        <br />
        {pubDate}
      </Card.Footer>
    </Card>
  );
};

export default ArticleDetails;
