import React from 'react';
// react-bootstrap
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';
// CSS
import '../CSS/cards.css';
import '../CSS/loading-component.css';

const ArticleCard = ({
  article,
  article: { title, isoDate, link, source, content },
  openModal,
}) => {
  const image = imageExtractor(article);
  const parsedDate = new Date(isoDate);
  const date = dateParser(parsedDate);
  const time = timeParser(parsedDate);

  return (
    <Card bg="dark" text="light" border="light" className="article-container">
      <Card.Header className="article-container-header">
        <div className="title-div">
          <Card.Title className="article-container-title">{title}</Card.Title>
          <Card.Subtitle>{source}</Card.Subtitle>
        </div>
        <div className="time-div">
          {time} <br />
          {date}
        </div>
      </Card.Header>
      <Card.Body className="article-card-body">
        {image && <Card.Img className="article-container-image" src={image} />}
        <Card.Text className="article-container-text article-card-text">
          {Parser(content, {
            replace: domNode => {
              if (domNode.name && domNode.name === 'img') return <></>;
            },
          })}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="article-container-footer ">
        <section className="article-button-div">
          <ButtonGroup>
            <Button href={link} variant="outline-secondary">
              Read On Site
            </Button>
            <Button onClick={() => openModal(article)} variant="outline-light">
              Read More
            </Button>
          </ButtonGroup>
        </section>
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
