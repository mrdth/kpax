const { MessageEmbed } = require('discord.js');

module.exports = (searchTerm, searchResults) => {
  const links = [];
  searchResults.forEach((item, idx) => {
    links.push(`\`${idx + 1}\` [${item.title}](${item.link})`);
  });

  return new MessageEmbed()
    .setColor('0x00ff00')
    .setAuthor(`Results for "${searchTerm}"`)
    .setDescription(links.join('\r\n'))
    .setFooter('Type the number of the song to add it to the playlist');
};
