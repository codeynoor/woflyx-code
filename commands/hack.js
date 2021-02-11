const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');
const Canvas = require('canvas');
const moment = require('moment')

module.exports = {
    name: 'hack',
    description: 'hack someone! >:)',
    async execute(message, args, client) {
        const TARGET = message.mentions.users.first()
        if(!TARGET) return message.channel.send('who are we hacking,,,,?')
        const { guild } = message
        const user  = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        let num = [64, 7, 82, 69, 72, 6, 35, 28, 53, 16, 264, 37, 15, 48, 54, 13, 65, 93, 27, 16]

        let randnum = num[Math.floor(Math.random() * num.length)]

        let Num = [2, 3, 4]

        let randNum = Num[Math.floor(Math.random() * Num.length)]

        let avatarurl = user.displayAvatarURL({size: 4096, dynamic: true});

        let suffix = ['eatsbutt', 'coolXD69', 'coolXD', 'king69', 'XD', 'goesBRR', 'POG69', 'LLL', 'EisPOG']

        let randSuffix = suffix[Math.floor(Math.random() * suffix.length)]


        const msg = message.channel.send(`|`)
        .then(msg => msg.edit(`/`)).then(msg => msg.edit(`-`)).then(msg => msg.edit(`\\`)).then(msg => msg.edit(`|`)).then(msg => msg.edit(`/`)).then(msg => msg.edit(`-`)).then(msg => msg.edit(`\\`))
        .then(msg => msg.edit(`Target set to ${TARGET}`))
        .then(msg => msg.edit(`Fetching data for ${TARGET}`))        .then(msg => msg.edit(`Fetching data for ${TARGET}.`))        .then(msg => msg.edit(`Fetching data for ${TARGET}..`))        .then(msg => msg.edit(`Fetching data for ${TARGET}...`))
        .then(msg => msg.edit(`Successfuly fetched data for ${TARGET}`))
        .then(msg => msg.edit(`Username: ${TARGET.tag}\nDate joined: ${new Date(member.joinedTimestamp).toLocaleDateString()} ${moment(member.user.joinedTimestamp).format('LT')}\nDate created: ${new Date(member.createdTimestamp).toLocaleDateString()} ${moment(member.user.createdTimestamp).format('LT')}\nUser ID: ${TARGET.id}`)).then(msg => msg.edit(`Username: ${TARGET.tag}\nDate joined: ${new Date(member.joinedTimestamp).toLocaleDateString()} ${moment(member.user.joinedTimestamp).format('LT')}\nDate created: ${new Date(member.createdTimestamp).toLocaleDateString()} ${moment(member.user.createdTimestamp).format('LT')}\nUser ID: ${TARGET.id}`))
        .then(msg => msg.edit(`Token of ${TARGET} found from discord/api/v6: ODA4MzgyNDAxKJpNTk1MzEwMTExHRYxw.COSIE_4yhxZ7IKah3EOZWH3ZNU`))
        .then(msg => msg.edit(`IP Address is: 127.0.0.4`))
        .then(msg => msg.edit(`Injecting RAT`)).then(msg => msg.edit(`Injecting RAT.`)).then(msg => msg.edit(`Injecting RAT..`)).then(msg => msg.edit(`Injecting RAT...`))
        .then(msg => msg.edit(`RAT injected`))
        .then(msg => msg.edit(`RAT is attempting to steal passwords`)).then(msg => msg.edit(`RAT is attempting to steal passwords.`)).then(msg => msg.edit(`RAT is attempting to steal passwords..`)).then(msg => msg.edit(`RAT is attempting to steal passwords...`)).then(msg => msg.edit(`Passwords stolen`))
        .then(msg => msg.edit(`Email: ${TARGET.username}${randSuffix}@gmail.com\nPassword: \`*********\``)).then(msg => msg.edit(`Email: ${TARGET.username}${randSuffix}@gmail.com\nPassword: \`*********\``)).then(msg => msg.edit(`Email: ${TARGET.username}${randSuffix}@gmail.com\nPassword: \`*********\``))
        .then(msg => msg.edit(`Searching for loli images`)).then(msg => msg.edit(`Searching for loli images.`)).then(msg => msg.edit(`Searching for loli images..`)).then(msg => msg.edit(`Searching for loli images...`)).then(msg => msg.edit(`Found ${randnum} loli images`)).then(msg => msg.edit(`Sending data to the FBI`)).then(msg => msg.edit(`Sending data to the FBI.`))
        .then(msg => msg.edit(`Sending data to the FBI..`)).then(msg => msg.edit(`Sending data to the FBI...`)).then(msg => msg.edit(`Successfuly sent data`))
        .then(msg => msg.edit(`Target will be raided in under 4 days`)).then(msg => msg.edit(`/`)).then(msg => msg.edit(`-`)).then(msg => msg.edit(`\\`)).then(msg => msg.edit(`|`))
        .then(msg => msg.edit(`/`)).then(msg => msg.edit(`-`)).then(msg => msg.edit(`\\`))
        .then(msg => msg.edit(`Searching for PH and xHamster accounts`)).then(msg => msg.edit(`Searching for PH and xHamster accounts.`)).then(msg => msg.edit(`Searching for PH and xHamster accounts..`)).then(msg => msg.edit(`Searching for PH and xHamster accounts...`))
        .then(msg => msg.edit(`${randNum} accounts found`))
        .then(msg => msg.edit(`Highest role: ${message.mentions.members.first().roles.highest}`))
        .then(msg => msg.edit(`Grabbing PFP of ${TARGET}`))
        .then(msg => msg.edit(`PFP found:\n${avatarurl}`)).then(msg => msg.edit(`PFP found:\n${avatarurl}`))
        .then(msg => msg.edit(`Finished hacking ${TARGET}`))
        .then(msg => msg.edit(`/`)).then(msg => msg.edit(`-`)).then(msg => msg.edit(`\\`)).then(msg => msg.edit(`|`)).then(msg => msg.edit(`/`)).then(msg => msg.edit(`-`)).then(msg => msg.edit(`\\`))
        .then(msg => msg.edit(`The *totally* real and unharmful hack is now complete`))        
    }
}