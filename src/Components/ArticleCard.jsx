import React, { Component } from 'react';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';
// CSS
import '../CSS/cards.css';
import '../CSS/loading-component.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

class ArticleCard extends Component {
  state = {
    expanded: false,
  };
  render() {
    const { expanded } = this.state;
    const {
      article,
      article: { title, isoDate, link, source, content },
    } = this.props;
    const image = imageExtractor(article);
    const parsedDate = new Date(isoDate);
    const date = dateParser(parsedDate);
    const time = timeParser(parsedDate);

    return (
      <section className="article-card box">
        <section className="article-header">
          {image && (
            <img src={image} alt="none found" className="article-image" />
          )}
          <h6 className="article-title">
            <strong>{title}</strong>
          </h6>
          <section className="article-subtitle">
            <p>{source}</p>
            <p>{time + ' ' + date}</p>
          </section>

          <ButtonGroup className="article-button-div" size="sm">
            <Button href={link} variant="outline-light">
              Visit Site
            </Button>
            <Button onClick={this.toggleShow} variant="light">
              {expanded ? 'Hide' : 'Expand'}
            </Button>
          </ButtonGroup>
        </section>
        <section className={expanded ? 'article-body' : 'hidden-body'}>
          {Parser(content, {
            replace: domNode => {
              if (domNode.name && domNode.name === 'img') return <></>;
            },
          })}
        </section>
      </section>
    );
  }

  toggleShow = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

export default ArticleCard;
