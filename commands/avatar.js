const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'avatar',
    execute(message, args, client) {
        let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatarurl = user.displayAvatarURL({size: 4096, dynamic: true});
  
  const avatarembed = new Discord.MessageEmbed()
  .setTitle(`Avatar of ${user.tag}`)
  .setDescription(`[Click for avatar URL of **${user.tag}**](${avatarurl})`)
  .setColor("RANDOM")
  .setImage(avatarurl)
  
  message.channel.send(avatarembed);
    }
}