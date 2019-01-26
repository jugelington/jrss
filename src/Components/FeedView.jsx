import React from 'react';
import ReactLoading from 'react-loading';
import ArticleDetails from './ArticleDetails';

const FeedView = ({ articles, loading, feedName, tagName }) => {
  const filteredArticles = feedName
    ? articles.filter(a => a.feedName === feedName)
    : tagName
    ? articles.filter(a => a.feedTags.includes(tagName))
    : articles;

  return (
    <section className="article-container">
      {loading ? (
        <ReactLoading type={'spin'} color={'gray'} height={100} width={100} />
      ) : (
        filteredArticles.map(article => (
          <ArticleDetails key={article.link} article={article} />
        ))
      )}
    </section>
  );
};

export default FeedView;
