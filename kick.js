const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick command',
    execute(message, args, client) {
        if (!message.guild) return;

        if (message.content.startsWith("-kick")) {
      
          if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Oof, You do not have permission to use this command")
          if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("Oof, I do not have permission to use this command :/")
      
          const user = message.mentions.users.first();
      
          if (user) {
      
            const member = message.guild.member(user);
      
            if (member) {
      
              member
                .kick('Unspecified')
                .then(() => {
      
                  message.reply(`I successfully kicked <@${user.id}>`);
                })
                .catch(err => {
      
                  message.reply('Oof, I could not kick the specifed member');
      
                  console.error(err);
                });
            } else {
      
              message.reply("Oof, The specified user isn't in this guild");
            }
      
          } else {
            message.reply("You silly! You need to specify a member to kick");
              }
           }
    }
}