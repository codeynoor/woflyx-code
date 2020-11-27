const { stripIndents } = require('common-tags');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');
const moment = require('moment')

module.exports = {
    name: 'serverinfo',
    description: 'server info',
    execute(message, args, client) {
        const { guild } = message

        const { name, region, memberCount, owner, id } = guild
        const icon = guild.iconURL({size: 4096, dynamic: true})

        const siembed = new Discord.MessageEmbed()
        .setTitle(`Server info for ${name}`)
        .setThumbnail(icon)
        .setColor("RANDOM")
        .addField("General", [
            `✎ **Name:** ${name}`,
            `✎ **ID:** ${id}`,
            `✎ **Server Reigon:** ${region}`,
            `✎ **Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).fromNow()}`
        ])

        message.channel.send(siembed);
    }
}