const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
  name: 'info',
  description: 'creator info',
  execute(message, args, client) {
    let creditembed = new Discord.MessageEmbed() 
    .setColor('#49ba67')
    .addField('Creators information', "ˋ°•*⁀➷ Be respectful to them!")
    .addFields(
      {  name: "Coder",
         value: "• EvilYEEYEE •#4960",
         inline: true
      },

    {
      name: "Helper",
      value: "Striking Wind Dragon#1214",
      inline: true
    }

    )
    .addField('Bot Information', "ˋ°•*⁀➷ Beep boop. boop beep?‏‏‎‏‏‎")
    .addField("Bot Version", "Indev", inline = true)
    .addField("Coding Language", "Discord.js", inline = true)

    if (message.content.startsWith('-info')) {
      message.channel.send(creditembed);
    }
  }
}

