const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');

module.exports = {
    name: 'usage',
    description: 'usage command',

    execute(message, args, client) {
        if(!args[0]) {
            message.channel.send('You must provide one argument silly!')
        }
        
        if (args == 'say') {

        message.channel.send("`><` **Optional argument**\n`<>` **Required argument**\n The usage of the command say is ```-say >embed< <message>```\n Availability: Admin/Mod");
        }

        if (args == 'ping') {
            message.channel.send('The usage of ping is ```-ping <no args>```\nAvailability: Everyone');
        }
        
        if(args == 'ban') {
            message.channel.send('`<>` **Required argument**\n The usage of ban is ```-ban <member>```\nAvailability: Admin/Mod');
        }
        
        if(args == 'kick') {
            message.channel.send('`<>` **Required argument**\n The usage of ban is ```-kick <member>```\nAvailability: Admin/Mod')
        }

        if(args == 'avatar') {
            message.channel.send("`<>` **Required argument**\nThe usage of avatar is ```-avatar <member>```\nAvailability: Everyone")
        }

        if(args == 'social') {
            message.channel.send("The usage of social is```-social <no args>```\nAvailability: Everyone")
        }
        if(args == 'usage') {
            message.channel.send("The usage of usage is```-usage <command>```\nAvailability: Everyone")
        }
        if(args == 'info') {
            message.channel.send("The usage of info is```-creatorinfo <no args>```\nAvailability: Everyone")
        }
        if(args == 'whois') {
            message.channel.send("`<>` **Required argument**\nThe usage of whois is```-whois <member>```\nAvailability: Everyone")
        }
        if(args == 'purge') {
            message.channel.send("`<>` **Required argument**\nThe usage of purge is```-purge <amount>```\nAvailability: Admin/Mod")
        }    
         if(args == 'help') {
            message.channel.send("The usage of help is ```-help <no args>```\nAvailability: Everyone")
         }
}
}