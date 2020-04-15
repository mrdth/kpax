const { MessageEmbed } = require('discord.js');
const htmlEntities = require('../htmlEntities');

const getVideoURL = (id) => {
  return 'https://www.youtube.com/watch?v=' + id;
};

module.exports = (searchTerm, searchResults) => {
  const links = [];
  searchResults.forEach((item, idx) => {
    links.push(`\`${idx + 1}\` [${htmlEntities.decode(item.title)}](${getVideoURL(item.id)})`);
  });

  return new MessageEmbed()
    .setColor('0x00ff00')
    .setAuthor(`Results for "${searchTerm}"`)
    .setDescription(links.join('\r\n'))
    .setFooter('Type the number of the song to add it to the playlist');
};
