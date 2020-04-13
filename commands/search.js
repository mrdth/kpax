const doSearch = require('../utils/search');
const resultsEmbed = require('../utils/searchResultsEmbed');
const errorEmbed = require('../utils/errorEmbed');
const youtubeEmbed = require('../utils/youtubeItemEmbed');
const awaitReply = require('../utils/awaitReply');

exports.run = (client, message, args) => {
  const searchTerm = args.join(' ');
  console.log(`Searching for: ${searchTerm}`);
  doSearch(searchTerm, { key: client.config.youtube_key }).then(async response => {
    let choice = await awaitReply(message, resultsEmbed(searchTerm, response.results));
    choice = parseInt(choice);

    if (!isNaN(choice) && choice > 0) {
      message.channel.send(youtubeEmbed(response.results[choice - 1], message.author));
    }
  }).catch((err) => {
    console.log(err);
    message.channel.send(errorEmbed('Error: Nothing found'));
  });
};
