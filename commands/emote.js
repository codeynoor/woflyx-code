const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'emote',
    description: 'emote command',
    execute(message, args, client) {
        if(!args[0]) {
            message.channel.send('You must provide one argument silly!')
        }
        
        if (args == 'panic') {
            var replies = ['https://i.gifer.com/A6at.gif', 'https://i.gifer.com/8JtY.gif', 'https://i.gifer.com/5e4l.gif', 'https://i.gifer.com/9jUP.gif']

        var URL = replies[Math.floor(Math.random() * replies.length)];

        let panicembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.username} is panicking!`)
        .setImage(`${URL}`)

        message.channel.send(panicembed)
        }

        if (args == 'blush') {
            var replies = ['https://media1.tenor.com/images/4337721f737f06a3de22482c00b796a7/tenor.gif?itemid=5739604', 'https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361', 'https://media1.tenor.com/images/981ee5030a18a779e899b2c307e65f7a/tenor.gif?itemid=13159552', 'https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309', 'https://media1.tenor.com/images/f72035e032125a5395883b8d68d9df5d/tenor.gif?itemid=16149781',]

            var URL = replies[Math.floor(Math.random() * replies.length)];
    
            let blushembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username} is blusing, i wonder why...`)
            .setImage(`${URL}`)
            
            message.channel.send(blushembed);
        }

        if (args == `pat`) {
            message.channel.send(`<@${message.author.id}> pats <@${message.mentions.users.first()}>`);
            return;
        } 

    }

}

