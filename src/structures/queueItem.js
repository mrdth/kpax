const getMessageAuthorInfo = (message) => {
  return message.guild.members.fetch(message.author.id).then((details) => {
    return {
      id: details.user.id,
      name: details.nickname,
      avatarURL: details.user.avatarURL({ size: 16 })
    };
  });
};

const formatDuration = (hours, minutes, seconds) => {
  return `${hours ? ('0' + hours).slice(-2) + ':' : ''}${minutes ? ('0' + minutes).slice(-2) : '00'}:${('0' + seconds).slice(-2)}`;
};

const item = (data, message) => {
  return getMessageAuthorInfo(message).then(user => {
    return {
      id: data.id,
      title: data.title,
      thumbnailURL: data.thumbnails.default.url,
      duration: formatDuration(data.duration.hours, data.duration.minutes, data.duration.seconds),
      user: user
    };
  });
};

module.exports = item;
