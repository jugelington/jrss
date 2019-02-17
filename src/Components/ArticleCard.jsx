import React, { Component } from 'react';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import { imageExtractor, dateParser, timeParser } from '../utilities';
import Parser from 'html-react-parser';

class ArticleCard extends Component {
  state = {
    expanded: false,
  };
  render() {
    const { expanded } = this.state;
    const {
      article,
      article: { title, isoDate, link, feedName, content },
    } = this.props;
    const image = imageExtractor(article);
    const parsedDate = new Date(isoDate);
    const date = dateParser(parsedDate);
    const time = timeParser(parsedDate);

    return (
      <section className="box article-card">
        <section className="article-header">
          {image && <img src={image} alt="none found" />}
          <h6>
            <strong>{title}</strong>
          </h6>
          <section>
            <p>{feedName}</p>
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
              if (domNode.name) {
                if (domNode.name === 'img')
                  return <img src={domNode.attribs.src} alt="error" />;
                if (domNode.name === 'a') {
                  const text = domNode.children
                    .filter(child => child.type === 'text')
                    .map(text => text.data)
                    .join('');
                  return <>{text}</>;
                }
                if (['table', 'tbody'].includes(domNode.name)) return <></>;
              }
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
