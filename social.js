const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'social',
    aliases: ['socials'],
    description: 'social',
    execute(message, args, client) {

        let socialembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setFooter(`Requested by ${message.author.tag}`)
        .setTitle("These are the official socials of • EvilYEEYEE •#4960")
        .setDescription("‏‏‎Thanks for checking in!")
        .addFields(
            {name: 'YouTube', value: 'Click [**here**](https://www.youtube.com/c/EvilDoesGaming) for his YT Channel!'},
            {name: 'Instagram', value: 'Click [**here**](https://www.instagram.com/evil_fam_official/) for his Instagram!'},
            {name: 'Twitter', value: 'Click [**here**](https://twitter.com/itzAceOFFICIAL) for his Twitter!'},
            { name: 'Reddit', value: 'Click [**here**]() for his reddit!' }
        )
        message.channel.send(socialembed);
    }
}