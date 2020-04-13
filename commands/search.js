const doSearch = require('../utils/search');
const resultsEmbed = require('../utils/embeds/searchResultsEmbed');
const errorEmbed = require('../utils/embeds/errorEmbed');
const youtubeEmbed = require('../utils/embeds/youtubeItemEmbed');
const awaitReply = require('../utils/awaitReply');

exports.run = (client, message, args) => {
  console.log(message.author);//
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
