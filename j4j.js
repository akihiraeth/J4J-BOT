const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + " akihiraeth Youtube | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(
    `${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`
  );
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let aki = await data.get(msg.author.id);

        if (aki === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(8000);
          await msg.channel.send("https://discord.gg/phrBpeqk8s"); // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.
          await data.set(msg.author.id, 2);
          await sleep(10000);
          await msg.channel.send("gel geleyim"); // kullanıcıya oto gönderilecek mesajı yaz
        }
      }
    }
  }
});

client.on("guildCreate", aki => {
  sleep(10000);
  if (
    aki.id === "692044223255412776" || // j4j sunucusunun idsi
    aki.id === "659549142086975515" // j4j sunucusunun idsi
  ) {
  }
});

client.on("ready", () => {
  setInterval(() => {
    let a = client.channels.get("800846785609203782"); // j4j sunucusunun kanal id'si

    a.send("**J4J kalıcıyım seri dm **");
  }, 50000);
});

client.on("ready", () => {
  setInterval(() => {
    let a = client.channels.get("798580659530235915"); // j4j sunucusunun kanal id'si

    a.send("J4J türküm kalıcıyım  seri dm");
  }, 300000);
});

client.login(""); // user tokeniniz
