const doSearch = require('../utils/search');
const createEmbed = require('../utils/createEmbed');
const errorEmbed = require('../utils/errorEmbed');

exports.run = (client, message, args) => {
  doSearch(args, { key: client.config.youtube_key }).then(results => {
    message.channel.send(createEmbed(args, results));
  }).catch(() => {
    message.channel.send(errorEmbed('Error: Nothing found'));
  });
};
