0;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://voicer123.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment"); ////// DEV NINJA//////
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator"); ////// DEV ninja //////
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const prefix = "";
const { Client, Collection } = require("discord.js");

//
client.commands = new Collection();
client.aliases = new Collection();


client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`POLAT BOT`,];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

const yt = require("ytdl-core");

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (
    oldMember.voiceChannel === undefined &&
    newMember.voiceChannel !== undefined
  ) {
    const voiceChannel = client.channels.get("746522612397506581");
    voiceChannel.join().then(connnection => {
      let disp = yt("https://youtu.be/5zsvDfn2chI", {
        //linke voicaka
        audioonly: true
      });
      const dispatcher = connnection.playStream(disp);
    });
  } else if (newMember.voiceChannel === undefined) {
    const voiceChannel = client.channels.get("746522612397506581");
    voiceChannel.leave();
  }
});





client.login("NzQyMzMyNTkwNzEwODQ5NTQ2.XzElGQ.dIcDLC531wJ1eW6Y-howTSN6gRc");
