const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "512998882209300481"; 
var channel = "512999017404301313";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(' D7i :x: 193 :) ')
    },305);
})

client.on('message',function(message) {
    let prefix = ""; //بريفيكسك
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
  if (message.author.id !== '507138559640076294') return message.nothing
if('') return;
message.channel.send(`${args}`);
}
});

client.login(process.env.BOT_TOKEN);
