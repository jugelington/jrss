import React, { Component } from 'react';
import ArticleDetails from './ArticleDetails';
import { rssParser } from '../utilities';
import _ from 'lodash';

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
            <ArticleDetails key={article.link} article={article} />
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
        return rssParser(feeds, feedName).then(articles => {
          return articles;
        });
      }),
    ).then(articles => {
      const flattenedArticles = _.flatten(articles).sort((a, b) =>
        a.isoDate < b.isoDate ? 1 : -1,
      );
      return this.setState({
        articles: flattenedArticles,
        loading: false,
      });
    });
  };
}

export default FrontPage;
