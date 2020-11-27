const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'foot',
    description: 'foot',
    execute(message, args, client) {
        if(!message.content.startsWith('-foot')) return;

        if(message.content.startsWith('-foot')) {
            message.channel.send('https://tenor.com/view/toes-gif-9925914');
        }
    }
}