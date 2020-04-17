const parser = require('../utils/youtubeURLParser');
const getYoutubeItem = require('../utils/getYouTubeVideo');
const getYoutubePlaylist = require('../utils/getYouTubePlaylist');

const embeds = require('../utils/embeds');
const queueItem = require('../structures/queueItem');

exports.run = (client, message, args) => {
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const handleVideo = video => {
    queueItem(video, message)
      .then(item => {
        client.queue.addItem(item);

        message.channel.send(`:white_check_mark: **${item.title}** successfully added!`);
        // message.channel.send(
        //   embeds.youtubeItemEmbed(item)
        // );
      });
  };

  const item = parser.parseURL(args[0]);

  switch (item.type) {
    case 'video':
      getYoutubeItem(item.id).then(handleVideo);
      break;

    case 'playlist':
      getYoutubePlaylist(item.id, client.config.maxPlaylistItems).then(items => {
        items.forEach(async item => {
          await sleep(500);
          getYoutubeItem(item.id).then(handleVideo);
        });
      });
      break;
  }
};

exports.help = {
  name: 'add',
  description: 'Add an item to the queue',
  usage: 'add [youtube url]'
};

exports.public = true;
