const { MessageEmbed } = require('discord.js');

module.exports = (item, requestor = null) => {
  const embed = new MessageEmbed()
    .setColor('0x00ff00')
    .setTitle(item.title)
    .setURL(item.link)
    .setThumbnail(item.thumbnails.default.url);

  if (requestor) {
    embed.setFooter(`Added by ${requestor.username}`, requestor.avatarURL({ size: 16 }));
  }

  return embed;
};
