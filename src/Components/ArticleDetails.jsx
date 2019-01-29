import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';

const ArticleDetails = ({
  article,
  article: { title, creator, author, isoDate, link, source, content },
  openModal,
}) => {
  const image = imageExtractor(article);
  const parsedDate = new Date(isoDate);
  const date = dateParser(parsedDate);
  const time = timeParser(parsedDate);

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
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '20% 80%',
          }}
        >
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
          <Card.Text
            style={{
              gridColumnStart: '2',
              textAlign: 'left',
              overflowY: 'hidden',
              maxHeight: '10vw',
            }}
          >
            {Parser(content, {
              replace: domNode => {
                if (domNode.name && domNode.name === 'a')
                  return <>{domNode.data}</>;
                if (domNode.name && domNode.name === 'img') return <></>;
              },
            })}
          </Card.Text>
        </section>
        <Button onClick={() => openModal(article)}>Read More</Button>
        <Button href={link} variant="secondary">
          Read On Site
        </Button>
      </Card.Body>
      <Card.Footer>
        {creator || author}
        <br />
        {date} {time}
      </Card.Footer>
    </Card>
  );
};

export default ArticleDetails;
