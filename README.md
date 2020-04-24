# Zealcord Development API Wrapper

An API Wrapper for [Zealcord Development API(s)](https://app.zealcord.xyz/api/bots)

<div align="center">
    <p>
        <a href="https://travis-ci.com/zealcordNation/zealcord.js"><img
                src="https://travis-ci.com/zealcordNation/zealcord.js.svg?branch=master" /></a>
    </p>
</div>

# Documentation

WIP :P

## How to Install

```bash
npm i zealcord.js --save
```

# Examples

## With async/await

```js
const Discord = require("discord.js");
const zealcordDev = require("zealcord.js");

const bot = new Discord.Client();
const zealcord = new zealcordDev("Your Zealcord API Token", "Your Bot User ID", "Your ID");

bot.on("ready", () => console.log("Ready!"));

bot.on("message", async message => {
    var args = message.content.split(" ").replace(".", "");

    if (messsage.content === ".bot") {
        var botData = await zealcord.getBot(args[0]);
        if (!botData || botData === undefined)
            return message.channel.send("Sorry, but that Bot was not registered yet on Zealcord Nation");
        message.channel.send(`${botData.bot.tag} by ${botData.owner.tag} with Prefix ${botData.prefix}!`);
    }
});

bot.login("yourDiscordBotToken");
```

## With .then() [Promises]

```js
const Discord = require("discord.js");
const zealcordDev = require("zealcord.js");

const bot = new Discord.Client();
const zealcord = new zealcordDev("Your Zealcord API Token", "Your Bot User ID", "Your ID");

bot.on("ready", () => console.log("Ready!"));

bot.on("message", message => {
    var args = message.content.split(" ").replace(".", "");

    if (messsage.content === ".bot") {
        zealcord.getBot(args[0]).then(botData => {
            if (!botData || botData === undefined)
                return message.channel.send("Sorry, but that Bot was not registered yet on Zealcord Nation");
            message.channel.send(`${botData.bot.tag} by ${botData.owner.tag} with Prefix ${botData.prefix}!`);
        });
    }
});

bot.login("yourDiscordBotToken");
```
Thanks~