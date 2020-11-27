module.exports = {
    name: 'setnick',
    description: 'set nick',
    execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
          }
          
          let user = message.mentions.users.first(); 
          if (!user) return message.channel.send({embed: {color: "RED", description: "Who's nickname do you want to change?"}});
          
          let nick = args.slice(1).join(" ");
          if (!nick) return message.channel.send({embed: {color: "RED", description: "What do you want the nickname to be?"}});
          
          let member = message.guild.members.cache.get(user.id);
          
          member.setNickname(nick);
          return message.channel.send({embed: {color: "GREEN", description: `Successfully changed **${user.tag}** nickname to **${nick}**`}});
    }
}