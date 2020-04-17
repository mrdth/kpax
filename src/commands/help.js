exports.run = (client, message, args) => {
// If no specific command is called, show all available commands.
  if (!args[0]) {
    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const publicCommands = client.commands.filter(command => command.public);
    const commandNames = publicCommands.keyArray();

    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let output = `= Command List =\n\n[Use ${client.config.prefix}help <commandname> for details]\n\n`;

    const sorted = publicCommands.array().sort((a, b) => a.help.name > b.help.name);
    sorted.forEach(command => {
      output += `${client.config.prefix}${command.help.name}${' '.repeat(longest - command.help.name.length)} :: ${command.help.description}\n`;
    });

    message.channel.send(output, { code: 'asciidoc' });
  } else {
    // Show individual command's help.
    let command = args[0].toLowerCase();
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n\n${command.help.description}\nusage:: ${client.config.prefix}${command.help.usage}`, { code: 'asciidoc' });
    }
  }
};

exports.help = {
  name: 'help',
  description: 'Displays help for available commands.',
  usage: 'help [command]'
};

exports.public = true;
