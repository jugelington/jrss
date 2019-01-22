import React, { Component } from 'react';
import FeedDetails from './FeedDetails';
import ArticleDetails from './ArticleDetails';
import { rssParser } from '../utilities';

class Feed extends Component {
  state = {
    articles: [],
    loading: true,
  };

  render() {
    // const { feedName, feeds } = this.props;
    const { loading, articles } = this.state;
    return (
      <div>
        {/* <FeedDetails key={feedName} feed={feeds[feedName.toLowerCase()]} /> */}
        <section className="card-container">
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
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (prevProps !== this.props) this.fetchFeed();
  }

  fetchFeed = () => {
    const { feeds, feedName } = this.props;
    rssParser(feeds, feedName).then(articles => {
      this.setState({ articles, loading: false });
    });
  };
}

export default Feed;
