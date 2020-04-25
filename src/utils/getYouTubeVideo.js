const config = require('~root/config');
const YouTube = require('simple-youtube-api');
const yt = new YouTube(config.youtube_key);

module.exports = (id) => {
  return yt.getVideoByID(id);
};
