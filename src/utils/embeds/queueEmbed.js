const { MessageEmbed } = require('discord.js');
const plural = require('plur');
const htmlEntities = require('../htmlEntities');

const getVideoURL = (id) => {
  return 'https://www.youtube.com/watch?v=' + id;
};

module.exports = (queue, page) => {
  // const paged = queue.getItemsPaginated(page);
  const links = [];
  page.items.forEach((item, idx) => {
    links.push(`\`${idx + 1}\` [${htmlEntities.decode(item.title)}](${getVideoURL(item.id)}) - ${item.formattedDuration}`);
  });
  return new MessageEmbed()
    .setColor('0x00ff00')
    .setTitle(`Music Queue (${queue.items.length} ${plural('track', queue.items.length)} - ${queue.getFormattedTotalTime()})`)
    .setDescription(links.join('\r\n'))
    .setFooter((page.lastPage !== 1) ? page.pageText : '');
};
