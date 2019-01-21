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
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.map(article => (
            <ArticleDetails key={article.guid} article={article} />
          ))
        )}
      </div>
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
