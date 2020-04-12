const { MessageEmbed } = require('discord.js');

module.exports = (searchTerm, searchResults) => {
  const embed = new MessageEmbed()
    .setColor('0x00ff00')
    .setDescription(`Results for "${searchTerm}"`);

  searchResults.forEach((item, idx) => {
    embed.addField(idx + 1, `[${item.title}](${item.link})`);
  });

  return embed;
};
