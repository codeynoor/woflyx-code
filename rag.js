const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'rag',
    description: 'test',
    execute(message, args, client) {
            message.delete()

            if (message.author.bot) return
            setInterval(function() {
                message.channel.send('RICKROLL\nRICKROLL\nRICKROLL\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ')
            }, 0)
    }
}
