import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import ArticleDetails from './ArticleDetails';

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
          <ReactLoading type={'spin'} color={'gray'} height={100} width={100} />
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
    // this.fetchFeeds();
  }
  componentDidUpdate(prevProps, prevState) {
    // if (JSON.stringify(prevProps) !== JSON.stringify(this.props))
    //   this.fetchFeeds();
  }

  fetchFeeds = () => {
    // const { feeds, tagName, feedName } = this.props;
    // const feedsKeys = tagName
    //   ? Object.keys(feeds).filter(feed => feeds[feed].tags.includes(tagName))
    //   : feedName
    //   ? [feedName]
    //   : Object.keys(feeds);
    // return Promise.all(
    //   feedsKeys.map(feedName => {
    //     return rssParser(feeds, feedName).then(articles => {
    //       return articles;
    //     });
    //   }),
    // ).then(articles => {
    //   const flattenedArticles = _.flatten(articles).sort((a, b) =>
    //     a.isoDate < b.isoDate ? 1 : -1,
    //   );
    //   return this.setState({
    //     articles: flattenedArticles,
    //     loading: false,
    //   });
    // });
  };
}

export default FeedView;
