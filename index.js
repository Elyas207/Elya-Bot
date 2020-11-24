const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('The Bot Is connected to uptimerobot.com'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
/*--------------------------------------------------------------------------------*/
const Discord = require("discord.js");

const client = new Discord.Client();

const PREFIX = '?';

var servers = {};

const ytdl = require("ytdl-core");


////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {
  console.log(`Logged in! And Working...`);

  client.user.setActivity('?Help | Client Version 1.4');
});

////////////////////////////////////////////////////////////////////////////////////////////////////




client.on('message', message => {
  if (message.content === `?Bantest`) {
    message.channel.send('@someusername is Banned!');

  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  console.log(message.content);
});

////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('message', message => {
  if (message.content === `?Channelid`) {
    message.channel.send('meThe Channelid is:');

  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === `pingme`) {
    message.channel.send('@' + message.author.tag);

  }
});

client.on('message', message => {
  if (message.content === `?Support`) {
    message.channel.send('message.author + Here is a list of commandes');

  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('message', message => {
  if (message.content === `?test`) {
    message.author.send(`Bot is ONLINE and WORKING...`);

  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async message => {

  let Cat = ['?Cat']
  let foundInText = false;
  for (var i in Cat) {
    if (message.content.toLowerCase().includes(Cat[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 9;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send({ files: ["./Cats/" + imageNumber + ".jpg"] })
  }
});



///////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async message => {

  let Anime = ['?Anime']
  let foundInText = false;
  for (var i in Anime) {
    if (message.content.toLowerCase().includes(Anime[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 9;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send({ files: ["./Anime/" + imageNumber + ".jpg"] })
  }
});


////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', async message => {
  let Hello = ['?Hello']
  let foundInText = false;
  for (var i in Hello) {
    if (message.content.toLowerCase().includes(Hello[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.channel.send('Hello!')
  }
});


////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', async message => {

  let Help = ['?Help']
  let foundInText = false;
  for (var i in Help) {
    if (message.content.toLowerCase().includes(Help[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 1;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send({ files: ["./Help/" + imageNumber + ".png"] })
  }
});






//////////////////////////////////////////////////////////////////////
client.on('message', async message => {

  let Nitro = [PREFIX +'Freenitro']
  let foundInText = false;
  for (var i in Nitro) {
    if (message.content.toLowerCase().includes(Nitro[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 1;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send('Ok here is some free Nitro chad... ');
    message.channel.send({ files: ["./FreeNitro/" + imageNumber + ".jpg"] })
  }
});


//////////////////////////////////////////////////////////////////////
client.on('message', async message => {

  let Memes = ['?Memes']
  let foundInText = false;
  for (var i in Memes) {
    if (message.content.toLowerCase().includes(Memes[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 9;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send({ files: ["./Memes/" + imageNumber + ".jpg"] })
  }
});


//////////////////////////////////////////////////////////////////////
client.on('message', async message => {

  let Ree = [PREFIX +'ree']
  let foundInText = false;
  for (var i in Ree) {
    if (message.content.toLowerCase().includes(Ree[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
  }
});

//////////////////////////////////////////////////////////////////////
client.on('message', async message => {

  let Pog = [PREFIX +'Pog']
  let foundInText = false;
  for (var i in Pog) {
    if (message.content.toLowerCase().includes(Pog[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 1;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send({ files: ["./Poggers/" + imageNumber + ".jpg"] })
  }
});

//////////////////////////////////////////////////////////////////////
client.on('message', async message => {

let blacklisted = ['Nigger', 'Cunt', 'Hoe', 'Slut'] 
let foundInText = false;
for (var i in blacklisted) {
  if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.delete();
 message.channel.send('Sorry, You Can not say that Word! https://tenor.com/view/fbi-raid-swat-gif-11500735')
}
});
//////////////////////////////////////////////////////////////////////

client.login(process.env.TOKEN);
