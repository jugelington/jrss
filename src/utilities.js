import Parser from 'rss-parser';

export const rssParser = async (feeds, feedName) => {
  const parser = new Parser();
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const obj = await parser.parseURL(
    CORS_PROXY + feeds[feedName.toLowerCase()].url,
  );
  const articles = obj.items;
  return articles.map(article => {
    article.source = obj.title;

    return article;
  });
};

export const imageExtractor = article => {
  console.log(article);
  const imageArr = Object.keys(article).reduce((acc, key) => {
    const srcRegex = /src="(\S+)"/;
    const result = srcRegex.exec(article[key]);
    if (result && result[1]) acc.push(result[1]);
    return acc;
  }, []);
  return imageArr[0];
};
