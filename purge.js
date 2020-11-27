const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'purge',
    description: 'purge',
    execute(message, args, clent) { 
        
        const messageArray = message.content.split(" ");
        const argx = messageArray.slice(1); 

        
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permission to use this command, silly!");

        let delAmount;

        if(!argx[0]) return message.channel.send("Provide a whole number silly!");

        if (isNaN(argx[0]) || parseInt(argx[0]) <= 0) { return message.reply('You silly! The amount must be a whole number!') }

        if (parseInt(argx[0]) > 99) {
            message.reply('You can only delete upto 99 messages at a time or it will cause the code to crash')
        } else {
            delAmount = parseInt(argx[0]);

            message.channel.bulkDelete(delAmount + 1, true);
            message.reply(`**Successfully Deleted ${delAmount} Messages**`);
        }
    }
}