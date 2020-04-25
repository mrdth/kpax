const config = require('~root/config');
const YouTube = require('simple-youtube-api');
const yt = new YouTube(config.youtube_key);

const defaultOptions = {
  maxResults: 10,
  type: 'video'
};

module.exports = (phrase) => {
  return yt.search(phrase, 10, defaultOptions);
};
