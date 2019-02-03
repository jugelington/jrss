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
        <div className="title-div">
          <Card.Title style={{ fontSize: '1.5rem' }}>{title}</Card.Title>
          <Card.Subtitle>{source}</Card.Subtitle>
        </div>
        <div className="time-div">
          {time} <br />
          {date}
        </div>
      </Card.Header>
      <Card.Body className="article-card-body">
        {image ? (
          <>
            <Card.Img className="article-card-image" src={image} />
            <Card.Text className="article-card-text with-image">
              {Parser(content, {
                replace: domNode => {
                  if (domNode.name && domNode.name === 'img') return <></>;
                },
              })}
            </Card.Text>
          </>
        ) : (
          <Card.Text className="article-card-text without-image">
            {Parser(content, {
              replace: domNode => {
                if (domNode.name && domNode.name === 'img') return <></>;
              },
            })}
          </Card.Text>
        )}
      </Card.Body>

      <Card.Footer className="article-card-footer">
        <div className="article-button-div">
          <ButtonGroup>
            <Button href={link} variant="outline-secondary">
              Read On Site
            </Button>
            <Button onClick={() => openModal(article)} variant="outline-light">
              Read More
            </Button>
          </ButtonGroup>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
