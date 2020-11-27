const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Ping command',
  execute(message, args) {
    const prefix = "-";

    const arg = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = arg.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (cmd === "ping") {
      const msg = message.channel.send(":ping_pong: Pong!")
      .then(msg => msg.edit(`:ping_pong: Pong!\nBot Lantency Is ${Math.floor(msg.createdAt - message.createdAt)}`));

      }
  },
};
