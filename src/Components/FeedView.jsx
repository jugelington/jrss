import React from 'react';
import ReactLoading from 'react-loading';
import ArticleDetails from './ArticleDetails';

const FeedView = ({ articles, loading, feedName, tagName, openModal }) => {
  const filteredArticles = articles.filter(article => {
    if (!article) return false;
    if (tagName) return article.feedTags.includes(tagName);
    if (feedName) return article.feedName === feedName;
    return true;
  });

  return (
    <section className="article-container">
      {loading ? (
        <ReactLoading type={'spin'} color={'gray'} height={100} width={100} />
      ) : (
        filteredArticles.map(article => (
          <ArticleDetails
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
