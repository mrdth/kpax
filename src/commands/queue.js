const embed = require('../utils/embeds/queueEmbed');

exports.run = (client, message, args) => {
  let currentPage = 1;
  // console.log(client.queue.getItemsPaginated());
  message.channel.send(embed(client.queue, client.queue.getItemsPaginated(currentPage)))
    .then(msg => msg.react('◀️'))
    .then(mReaction => mReaction.message.react('▶️'))
    .then(mReaction => {
      const reactionFilter = (reaction, user) => {
        return (reaction.emoji.name === '▶️' || reaction.emoji.name === '◀️') && user.id !== mReaction.message.author.id;
      };

      const collector = mReaction.message
        .createReactionCollector(reactionFilter, {
          time: 60000
        });

      // set collector events
      collector.on('collect', r => {
        switch (r.emoji.name) {
          case '◀️':
            if (currentPage > 1) {
              r.message.edit(embed(client.queue, client.queue.getItemsPaginated(--currentPage)));
            }
            break;

          default:
            r.message.edit(embed(client.queue, client.queue.getItemsPaginated(++currentPage)));
            break;
        }
        // console.log(r.emoji);
      });
    });
};

exports.help = {
  name: 'queue',
  description: 'Show the current queue',
  usage: 'queue'
};

exports.public = true;
