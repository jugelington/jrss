import Parser from 'rss-parser';

export const rssParser = async (feeds, feedName) => {
  const parser = new Parser({
    customFields: {
      item: [['media:content', 'media:content', { keepArray: true }]],
    },
  });
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const obj = await parser.parseURL(CORS_PROXY + feeds[feedName].url);
  const articles = obj.items;
  return articles.map(article => {
    article.source = obj.title;

    return article;
  });
};

export const imageExtractor = article => {
  if (article['media:content'])
    return article['media:content'][1]
      ? article['media:content'][1]['$'].url
      : article['media:content'][0].url;

  const srcRegex = /src="(\S+)"/;
  for (let key in article) {
    if (typeof article[key] === 'string' && article[key].match(srcRegex))
      return article[key].match(srcRegex)[1];
  }
};
