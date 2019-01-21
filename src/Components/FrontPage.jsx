import React, { Component } from 'react';
import ArticleDetails from './ArticleDetails';
import { rssParser } from '../utilities';
import _ from 'lodash';
import '../CSS/cards.css';

class FrontPage extends Component {
  state = {
    articles: [],
    loading: true,
  };
  render() {
    const { articles, loading } = this.state;
    return (
      <section className="article-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.map(article => (
            <ArticleDetails key={article.guid} article={article} />
          ))
        )}
      </section>
    );
  }

  componentDidMount() {
    this.fetchFeeds();
  }

  fetchFeeds = () => {
    const { feeds } = this.props;
    return Promise.all(
      Object.keys(feeds).map(feedName => {
        return rssParser(feeds, feedName).then(obj => obj.items);
      }),
    ).then(articles =>
      this.setState({ articles: _.flatten(articles), loading: false }),
    );
  };
}

export default FrontPage;
