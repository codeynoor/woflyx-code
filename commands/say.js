const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Say command',
    execute(message, args, client) {
        const prefix = "-";

const arg = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = arg.shift().toLowerCase();

if (cmd === "say") {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Oof, You do not have permission to use this command")

  if (message.deletable) message.delete();

  if (args.length < 1) 
    return message.reply("Nothing to say?").then(m => m.delete(100))

    if (args[0].toLowerCase() === "embed") {
      const mbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(args.slice(1).join(" "))
        .setTimestamp()
        .setFooter(client.user.username)
        .setTitle(message.author.username)
        .setImage(message.author.displayAvatarURL)
        
        message.channel.send(mbed);
   } else {
     message.channel.send(args.join(" "));
   }
 }
    }
}