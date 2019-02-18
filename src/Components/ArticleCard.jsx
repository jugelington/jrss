import React from 'react';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';

const ArticleCard = ({
  article,
  article: { title, isoDate, link, feedName, content, active },
  toggleActiveArticle,
}) => {
  const image = imageExtractor(article);
  const parsedDate = new Date(isoDate);
  const date = dateParser(parsedDate);
  const time = timeParser(parsedDate);
  return (
    <section className="article-card">
      <header>
        {image && <img src={image} alt="none found" />}
        <h6>
          <strong>{Parser(title)}</strong>
        </h6>
        <section>
          <p>{feedName}</p>
          <p>{time + ' ' + date}</p>
        </section>

        <ButtonGroup className="article-button-div" size="sm">
          <Button href={link} variant="outline-light">
            Visit Site
          </Button>
          <Button onClick={() => toggleActiveArticle(title)} variant="light">
            {active ? 'Hide' : 'Expand'}
          </Button>
        </ButtonGroup>
      </header>
      <section className={active ? 'body' : 'hidden'}>
        {Parser(content, {
          replace: domNode => {
            if (domNode.name) {
              if (domNode.name === 'img')
                return <img src={domNode.attribs.src} alt="error" />;
              if (domNode.name === 'a') {
                const text = domNode.children
                  .filter(child => child.type === 'text')
                  .map(text => text.data)
                  .join('');
                return <a href={domNode.attribs.href}>{text}</a>;
              }
              if (['table', 'tbody'].includes(domNode.name)) return <></>;
            }
          },
        })}
      </section>
    </section>
  );
};

export default ArticleCard;
