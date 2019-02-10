import React from 'react';
// react-bootstrap
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';
import PerfectScrollbar from 'react-perfect-scrollbar';
// CSS
import '../CSS/cards.css';
import '../CSS/loading-component.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
        </div>
        <div className="source-div">
          <Card.Subtitle>
            {`${time}   ${date}`} <br /> {source}
          </Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Body className="article-card-body">
        <PerfectScrollbar>
          {image && (
            <Card.Img className="article-container-image" src={image} />
          )}
          <Card.Text className="article-container-text article-card-text">
            {Parser(content, {
              replace: domNode => {
                if (domNode.name && domNode.name === 'img') return <></>;
              },
            })}
          </Card.Text>
        </PerfectScrollbar>
        <ButtonGroup size="sm" className="article-button-div">
          <Button href={link} variant="outline-secondary">
            Read On Site
          </Button>
          <Button onClick={() => openModal(article)} variant="outline-light">
            Read More
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
