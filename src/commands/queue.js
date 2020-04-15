exports.run = (client, message, args) => {
  console.log(client.queue.getItemsPaginated());
};

exports.help = {
  name: 'queue',
  description: 'Show the current queue',
  usage: 'queue'
};
