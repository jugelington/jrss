import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';
import '../CSS/articleCard.css';

const ArticleCard = ({
  article,
  article: { title, creator, author, isoDate, link, source, content },
  openModal,
}) => {
  const image = imageExtractor(article);
  const parsedDate = new Date(isoDate);
  const date = dateParser(parsedDate);
  const time = timeParser(parsedDate);

  return (
    <Card bg="dark" text="light" border="light" className="article-card">
      <Card.Header style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
        <div className="article-title-div">
          <Card.Title style={{ fontSize: '1.5rem' }}>{title}</Card.Title>
          <Card.Subtitle>{source}</Card.Subtitle>
        </div>
        <div className="article-time-div">
          {time} <br />
          {date}
        </div>
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
                if (domNode.name && domNode.name === 'img') return <></>;
              },
            })}
          </Card.Text>
        </section>
      </Card.Body>

      <Card.Footer>
        <div className="article-button-div">
          <ButtonGroup>
            <Button onClick={() => openModal(article)} variant="outline-light">
              Read More
            </Button>
            <Button href={link} variant="outline-secondary">
              Read On Site
            </Button>
          </ButtonGroup>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
