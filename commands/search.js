const doSearch = require('../utils/search');
const createEmbed = require('../utils/searchResultsEmbed');
const errorEmbed = require('../utils/errorEmbed');

exports.run = (client, message, args) => {
  const searchTerm = args.join(' ');
  console.log(`Searching for: ${searchTerm}`);
  doSearch(searchTerm, { key: client.config.youtube_key }).then(response => {
    message.channel.send(createEmbed(searchTerm, response.results));
  }).catch((err) => {
    console.log(err);
    message.channel.send(errorEmbed('Error: Nothing found'));
  });
};
