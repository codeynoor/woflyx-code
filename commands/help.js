const { stripIndent, stripIndents } = require('common-tags');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message, args) {
        if (!message.guild) return;

        let helpembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(":pencil: HERE ARE ALL THE COMMANDS :pencil:")
        .setDescription("My prefix is - | -info for info | -usage for command usage")
        .setFooter("Made by • EvilYEEYEE •#4960 and Striking Wind Dragon#1214")
        .addField(":paperclip: Normal", "```\nhelp\nping\nusage\n ```", inline = true)
        .addField(":information_source: Info", "```\ninfo\nsocial\nwhois\navatar```", inline = true)
        .addField(":lock: Mod", "```\nban\nkick\npurge\nsay```", inline = true)
        
        if (message.content.startsWith('-help')) message.channel.send(`<@${message.author.id}> Please check your DMs`).then(message.author.send(helpembed));
    }
}