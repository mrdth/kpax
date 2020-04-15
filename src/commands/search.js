const doSearch = require('../utils/search');
const embeds = require('../utils/embeds');
const awaitReply = require('../utils/awaitReply');
const queueItem = require('../structures/queueItem');

exports.run = (client, message, args) => {
  const searchTerm = args.join(' ');
  doSearch(searchTerm, { key: client.config.youtube_key })
    .then(async response => {
      const choice = parseInt(await awaitReply(
        message,
        embeds.searchResultsEmbed(searchTerm, response)
      ));

      if (!isNaN(choice) && choice > 0) {
        console.log(response[choice - 1]);

        queueItem(response[choice - 1], message)
          .then(item => {
            client.queue.addItem(item);

            message.channel.send(`:white_check_mark: **${item.title}** successfully added!`);
            message.channel.send(
              embeds.youtubeItemEmbed(item)
            );
          });
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
