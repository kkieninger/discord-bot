# discord-bot

Test Discord Bot

## Prerequisites

This repository assumes you have Node.js (v12 or higher) running on your machine. If not,
please follow the installation instructions outlined [in the official Discord documentation](https://discordjs.guide/preparations/#installing-node-js).

This repository also assumes you have created a corresponding Application and Bot, as outlined
by the [Discord documentation here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

## Setup

1. Clone this repository
2. `cd` into the directory and run `npm i` to install the required dependencies
3. Copy the `config.example.json` file
4. Within the `config.json` file, replace `your-token-here` with your bot's token. You can find
this token within the Discord Developer Portal.
    * **NOTE**: DO NOT commit your token to this GitHub repository.
5. Run `node .` to start the bot

## TODO

1. Welcome users and print out the server rules, which will require them to respond that they have acknowledged the rules
2. Ask for details about the user and assign roles in the server
3. Change their nickname
