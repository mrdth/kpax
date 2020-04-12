const search = require('youtube-search');

const defaultOptions = {
  maxResults: 10,
  type: 'video'
};

module.exports = (phrase, options) => {
  const searchOptions = { ...defaultOptions, ...options };
  return search(phrase, searchOptions);
};
