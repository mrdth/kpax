const { MessageEmbed } = require('discord.js');

const getVideoURL = (id) => {
  return 'https://www.youtube.com/watch?v=' + id;
};

module.exports = (item) => {
  return new MessageEmbed()
    .setColor('0x00ff00')
    .setTitle(item.title)
    .setURL(getVideoURL(item.id))
    .setThumbnail(item.thumbnailURL)
    .setFooter(
      `Added by ${item.user.name}`,
      item.user.avatarURL
    );
};
