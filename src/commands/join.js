exports.run = async (client, message, args) => {
  const voiceChannel = message.member.voice.channel; // eslint-disable-line
  if (!voiceChannel) {
    return message.reply('you need to be in a voice channel before I can join you!');
  }

  if (!voiceChannel.joinable) {
    return message.reply("I don't have permission to join you in that channel.");
  }

  client.voiceConnection = await voiceChannel.join();
};

exports.help = {
  name: 'join',
  description: 'Invite the bot to join your current voice channel.',
  usage: 'join'
};

exports.public = true;
