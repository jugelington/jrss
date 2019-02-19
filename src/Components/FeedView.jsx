import React from 'react';
// utilities
import ReactLoading from 'react-loading';
import _ from 'lodash';
// components
import ArticleCard from './ArticleCard';
const FeedView = ({
  articles,
  loading,
  feedName,
  tagName,
  openModal,
  activeArticle,
  activateArticle,
}) => {
  const filteredArticles = _.uniqBy(
    articles.filter(article => {
      if (!article) return false;
      if (tagName) return article.feedTags.includes(tagName);
      if (feedName) return article.feedName === feedName;
      return true;
    }),
    'link',
  );

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
            activeArticle={activeArticle}
            activateArticle={activateArticle}
          />
        ))
      )}
    </section>
  );
};

export default FeedView;
