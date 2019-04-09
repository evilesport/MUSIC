const discord = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const ready = require('./handlers/ready');
const message = require('./handlers/message');
const config = require('./settiings/config.json');
const {YouTubeAPIKey} = require('./settiings/credentials.json');
const utils = require('./global/utils');
const bot = new discord.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

const prefix = config.prefix
const token = process.env.TOKEN

require('./global/functions')(bot, utils, ytdl, config);

bot.on('error', err => {
 console.log(err);
});

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.youtube = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue = new Map() // Music Queue
bot.votes = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord);
