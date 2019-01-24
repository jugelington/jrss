import React, { Component } from 'react';
import ArticleDetails from './ArticleDetails';
import { rssParser } from '../utilities';
import _ from 'lodash';

class FeedView extends Component {
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
            <ArticleDetails
              key={article.link}
              article={article}
              openArticleModal={this.openArticleModal}
            />
          ))
        )}
      </section>
    );
  }

  componentDidMount() {
    this.fetchFeeds();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.fetchFeeds();
  }

  fetchFeeds = () => {
    const { feeds, tagName, feedName } = this.props;
    console.log(feeds);
    const feedsKeys = tagName
      ? Object.keys(feeds).filter(feed => feeds[feed].tags.includes(tagName))
      : feedName
      ? [feedName]
      : Object.keys(feeds);

    return Promise.all(
      feedsKeys.map(feedName => {
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

export default FeedView;
