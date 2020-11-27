const { stripIndents } = require('common-tags');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');
const moment = require('moment')

module.exports = {
    name: 'whois',
    description: 'whois',
    execute(message, args, client) {
        const { guild, channel } = message
        const user  = message.mentions.users.first() || message.member.user
        let avatarurl = user.displayAvatarURL({size: 4096, dynamic: true});
        const member = guild.members.cache.get(user.id)
        const joined = new Date(member.joinedTimestamp).toLocaleDateString()
        const created = new Date(user.createdTimestamp).toLocaleDateString()

        const whoisembed = new Discord.MessageEmbed()
        .setTitle(`User info for ${user.username}`)
        .setColor('GREEN')
        .setThumbnail(avatarurl)

        .addField("✎ Member Information", stripIndents`**~ Nickname:** ${member.nickname || "No nicknames"}
        **~ Joined At:** ${new Date(member.joinedTimestamp).toLocaleDateString()} ${moment(member.user.joinedTimestamp).format('LT')}
        **~ Role Count:** ${member.roles.cache.size - 1}
        `)

        .addField("✎ User Information", stripIndents`**~ Username:** ${member.user.username}
        **~ Discord Tag:** ${member.user.tag}
        **~ Avatar URL:** ${`Click [**here**](${avatarurl})`}
        **~ Created At:** ${new Date(user.createdTimestamp).toLocaleDateString()} ${moment(member.user.createdTimestamp).format('LT')}`)

        if (member.user.presence.game) {
            whoisembed.addField('Currently Playing', `**~ Name: ${member.user.presence.game.name}`)
        }   
            
        message.channel.send(whoisembed);
    }
}