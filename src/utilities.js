import Parser from 'rss-parser';

export const rssParser = async (feeds, feedName) => {
  const parser = new Parser({
    customFields: {
      item: [['media:content', 'media:content', { keepArray: true }]],
    },
  });
  const CORS_PROXY = 'https://jrss-cors-anywhere.herokuapp.com/';
  const obj = await parser.parseURL(CORS_PROXY + feeds[feedName].url);
  const articles = obj.items;
  return articles.map(article => {
    article.feedName = feeds[feedName].displayName;
    article.feedTags = feeds[feedName].tags;
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

export const dateParser = date => {
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const year = date.getFullYear();
  return `${day.length === 1 ? `0${day}` : day}/${
    month.length === 1 ? `0${month}` : month
  }/${year}`;
};

export const timeParser = date => {
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  return `${hour.length === 1 ? `0${hour}` : hour}:${
    minute.length === 1 ? `0${minute}` : minute
  }`;
};

export const activityToggle = (name, arr, identifier) => {
  return arr.map(item => {
    if (item[identifier] === name) {
      return item.active
        ? { ...item, active: false }
        : { ...item, active: true };
    } else {
      return { ...item, active: false };
    }
  });
};
