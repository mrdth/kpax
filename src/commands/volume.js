exports.run = async (client, message, args) => {
  if (!args[0]) {
    return message.channel.send('Current volume: ' + client.config.volume + '%');
  }

  client.config.volume = parseInt(args[0]);
  return message.channel.send('Volume set to ' + client.config.volume + '%');
};

exports.help = {
  name: 'volume',
  description: 'Show the current volume, or set a new volume for playback.',
  usage: 'volume [percent]'
};

exports.public = true;
