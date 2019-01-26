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
      }}
      className="feed-card"
      variant="dark"
      bg="dark"
      text="light"
      border="secondary"
    >
      <Card.Header style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
        <Card.Title style={{ fontSize: '1.5rem' }}>{title}</Card.Title>
        <Card.Subtitle>{source}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <section style={{ display: 'grid', gridTemplateColumns: '20% 80%' }}>
          {image ? (
            <Card.Img
              src={image}
              style={{
                maxHeight: 'auto',
                maxWidth: '80%',
                gridColumnStart: '1',
                border: '1px solid grey',
                borderRadius: '5px',
              }}
            />
          ) : (
            <></>
          )}
          <Card.Text style={{ gridColumnStart: '2' }}>
            {contentSnippet.substring(
              0,
              contentSnippet.indexOf('.', 500) + 1,
            ) || contentSnippet}
          </Card.Text>
        </section>
        <Button href={link} variant="secondary">
          read more
        </Button>
      </Card.Body>
      <Card.Footer>
        {creator || author}
        <br />
        {pubDate}
      </Card.Footer>
    </Card>
  );
};

export default ArticleDetails;
