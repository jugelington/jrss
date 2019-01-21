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
  const srcRegex = /src="(\S+)"/;
  for (let key in article) {
    if (typeof article[key] === 'string' && article[key].match(srcRegex))
      return article[key].match(srcRegex)[1];
  }
};
