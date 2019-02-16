import React from 'react';
// utilities
import ReactLoading from 'react-loading';
// components
import ArticleCard from './ArticleCard';
// css
import '../CSS/loading-component.css';

const FeedView = ({ articles, loading, feedName, tagName, openModal }) => {
  const filteredArticles = articles.filter(article => {
    if (!article) return false;
    if (tagName) return article.feedTags.includes(tagName);
    if (feedName) return article.source === feedName;
    return true;
  });

  return (
    <section className="article-container">
      {loading ? (
        <ReactLoading
          type={'spin'}
          color={'gray'}
          height={'100px'}
          width={'100px'}
          className="loading-spinner"
        />
      ) : (
        filteredArticles.map(article => (
          <ArticleCard
            key={article.link}
            article={article}
            openModal={openModal}
          />
        ))
      )}
    </section>
  );
};

export default FeedView;
