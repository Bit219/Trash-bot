const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('ur mum gey why u say ping baka');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDIxNTMyMTE4MDc4NzE3OTUz.DYOl7A.omd7AIGiwBIV495qEOUysQxjnpE);
