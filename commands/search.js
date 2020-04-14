const doSearch = require('../utils/search');
const embeds = require('../utils/embeds');
const awaitReply = require('../utils/awaitReply');

exports.run = (client, message, args) => {
  const searchTerm = args.join(' ');
  doSearch(searchTerm, { key: client.config.youtube_key })
    .then(async response => {
      const choice = parseInt(await awaitReply(
        message,
        embeds.searchResultsEmbed(searchTerm, response.results)
      ));

      if (!isNaN(choice) && choice > 0) {
        message.channel.send(
          embeds.youtubeItemEmbed(
            response.results[choice - 1],
            message.author
          )
        );
      }
    })
    .catch((err) => {
      console.log(err);
      message.channel.send(embeds.errorEmbed('Error: Nothing found'));
    });
};

exports.help = {
  name: 'search',
  description: 'Search youtube for an artist or song',
  usage: 'search [search term]'
};
