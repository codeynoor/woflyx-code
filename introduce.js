module.exports = {
    name: 'introduce',
    description: 'Introduce',
    execute(message, args, client) {
        const prefix = "-";

        if (message.author.bot) return;
        if (!message.guild) return; 
        if (!message.content.startsWith(prefix)) return;
      
        const arg = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
      
        if (cmd === "introduce") {
          if (message.deletable) message.delete()
            const msg = message.channel.send("Hi! UwU I'm a bot made by • EvilYEEYEE •#4960 You can call me Wolfyx! and you surely can do '-help' for some of my commands! :D")
        }
      
    }
}