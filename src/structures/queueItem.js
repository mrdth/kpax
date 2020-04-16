const getMessageAuthorInfo = (message) => {
  return message.guild.members.fetch(message.author.id).then((details) => {
    return {
      id: details.user.id,
      name: details.nickname,
      avatarURL: details.user.avatarURL({ size: 16 })
    };
  });
};

const durationToSeconds = (duration) => {
  return duration.seconds + (60 * duration.minutes) + (60 * 60 * duration.hours) + (24 * 60 * 60 * duration.days);
};

const formattedDuration = (duration) => {
  let text = `${duration.hours ? duration.hours + ':' : ''}`;
  text += `${(duration.hours || duration.minutes) ? String(duration.minutes).padStart(2, '0') + ':' : ''}`;
  text += `${String(duration.seconds).padStart(2, '0')}`;
  return text;
};

const item = (data, message) => {
  return getMessageAuthorInfo(message).then(user => {
    return {
      id: data.id,
      title: data.title,
      thumbnailURL: data.thumbnails.default.url,
      duration: durationToSeconds(data.duration),
      formattedDuration: formattedDuration(data.duration),
      user: user
    };
  });
};

module.exports = item;
