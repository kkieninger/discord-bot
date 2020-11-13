// default config
let config = null;

// If a valid config.json file was not included, throw exception and exit
try {
  config = require("./config.json");
} catch (e) {
  throw new Error("A config.json file was not found! You must include one");
}

const Discord = require("discord.js");
const client = new Discord.Client();

// Indicates that the bot is up and running
client.once("ready", () => {
  console.log("Ready!");
});

/**
 * This hook will fire when any user sends a message
 */
client.on("message", (message) => {
  console.log(message);
  const messageContent = message.content.toLowerCase();

  if (messageContent.includes("hello there")) {
    message.channel.send("...General Kenobi!");
  }
});

/**
 * This hook will execute when a new member is added, but I can't seem
 * to figure out how to get it to send DMs to users yet.
 */
client.on("guildMemberAdd", (member) => {
  console.log(member);
  member.send('hello there');
});

/**
 * If we don't have a valid configuration, throw exception and exit
 */
if (config && config.token) {
  client.login(config.token);
} else {
  throw new Error("You must include a bot token in your config.json!");
}
