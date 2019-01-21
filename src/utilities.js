import Parser from 'rss-parser';

export const rssParser = async (feeds, feedName) => {
  const parser = new Parser();
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const articles = await parser.parseURL(
    CORS_PROXY + feeds[feedName.toLowerCase()].url,
  );
  return articles;
};
