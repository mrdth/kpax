const getMessageAuthorInfo = (message) => {
  return message.guild.members.fetch(message.author.id).then((details) => {
    return {
      id: details.user.id,
      name: details.nickname,
      avatarURL: details.user.avatarURL({ size: 16 })
    };
  });
};

const item = (data, message) => {
  return getMessageAuthorInfo(message).then(user => {
    return {
      id: data.id,
      title: data.title,
      thumbnailURL: data.thumbnails.default.url,
      user: user
    };
  });
};

module.exports = item;
