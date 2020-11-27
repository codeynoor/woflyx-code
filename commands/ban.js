module.exports = {
    name: 'ban',
    description: 'Ban command',
    execute(message, args, client) {
        if (!message.guild) return;

if (message.content.startsWith("-ban")) {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Silly human, you do not have permission to use this command!")

  const user = message.mentions.users.first();

  if (user) {
 
    const member = message.guild.member(user);

    if (member) {
    
      member
        .ban({
          reason: 'Unspecified',
        })
        .then(() => {

          message.reply(`Successfully banned  <@${user.id}>`);
        })
        .catch(err => {
         
          message.reply('Oof, I was unable to ban the specified member');

          console.error(err);
        });
    } else {

      message.reply("You silly! The specified user isn't in this guild");
    }
  } else {

    message.reply("Silly human, specify a user to ban");
  }
}
    }
}