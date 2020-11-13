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
  // console.log(message);
  const messageContent = message.content.toLowerCase();

  if (messageContent.includes("hello there")) {
    message.channel.send("...General Kenobi!");
  }
});

/**
 * This hook listens for when new members join the server and then:
 * 1.) Assigns them a "quarantined" role with limited permissions
 * 2.) Sends a welcome greeting via DM
 * 
 * TODO:
 * 3.) Asks a series of questions
 */
client.on("guildMemberAdd", (member) => {
  console.log("a new member joined");
  const role = member.guild.roles.cache.find(
    (role) => role.name === config.roles.newMember
  );
  member.roles.add(role);
  member.send("Welcome to the server!");
});

/**
 * If we don't have a valid configuration, throw exception and exit
 */
if (config && config.token) {
  client.login(config.token);
} else {
  throw new Error("You must include a bot token in your config.json!");
}
