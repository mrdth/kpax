exports.run = async (client, message, args) => {
  // message.member.voice.channel.leave();
  client.voiceConnection.disconnect();
};

exports.help = {
  name: 'leave',
  description: 'Ask the bot to leave your current voice channel.',
  usage: 'leave'
};

exports.public = true;
