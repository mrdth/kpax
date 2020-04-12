const { MessageEmbed } = require('discord.js');

module.exports = (errorMessage) => {
  return new MessageEmbed()
    .setColor('0xff0000')
    .setTitle('Error')
    .setDescription(':x: ' + errorMessage);
};
