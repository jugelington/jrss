import React, { Component } from 'react';
import FeedDetails from './FeedDetails';
import ArticleDetails from './ArticleDetails';
import Parser from 'rss-parser';

class Feed extends Component {
  state = {
    articles: [],
    loading: true,
  };

  render() {
    const { feedName, feeds } = this.props;
    const { loading, articles } = this.state;
    return (
      <div>
        <FeedDetails key={feedName} feed={feeds[feedName.toLowerCase()]} />
        <section>
          {loading ? (
            <p>Loading</p>
          ) : (
            articles.map(article => (
              <ArticleDetails key={article.guid} article={article} />
            ))
          )}
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.fetchFeed();
  }

  fetchFeed = () => {
    const { feedName, feeds } = this.props;
    const parser = new Parser();
    (async () => {
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      let articles = await parser.parseURL(
        CORS_PROXY + feeds[feedName.toLowerCase()].url,
      );
      this.setState({ articles: articles.items, loading: false });
    })();
  };
}

export default Feed;
