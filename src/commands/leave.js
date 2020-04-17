exports.run = async (client, message, args) => {
  message.member.voice.channel.leave();
};

exports.help = {
  name: 'leave',
  description: 'Ask the bot to leave your current voice channel.',
  usage: 'leave'
};
