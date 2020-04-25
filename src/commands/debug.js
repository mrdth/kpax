const parser = require('~utils/youtubeURLParser');

exports.run = async (client, message, args) => {
  console.log(parser.parseURL('https://www.youtube.com/watch?v=lN-ASAfFcRI&list=RDlN-ASAfFcRI&start_radio=1'));
};

exports.public = false;
