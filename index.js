const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Client = require('discord.js');
const prefix = '-';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;

client.on('ready', () => {
  console.log('Demon is online.');
  client.user.setActivity('EvilDoesGaming | -help', {type: 'WATCHING'});
})

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);

  const command = args.shift().toLowerCase();

  if(!client.commands.has(command)) {
    return;
  }
  try{
    client.commands.get(command).execute(message, args, client);
  }catch(error){
    console.error(error);
    message.reply("There was an issue executing the specified command")
  }
});


client.login('NzcxMzA2NDgxMzQwMzgzMjQz.X5qNIw.Bgxad_i39-ektJIGJ1Zu-BZG7ZE')
