const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`RedHead Help`)
        .addField(`${prefix}play <music/url>`, 'Zum Musik machen du kek')
        .addField(`${prefix}search <music>`, 'Sucht die top 10 videos für deinen song')
        .addField(`${prefix}skip`, 'Skipt den song ')
        .addField(`${prefix}volume [volume]`, 'Lauter leiser ')
        .addField(`${prefix}pause`, 'Pause halt')
        .addField(`${prefix}resume`,'Pausen Ende')
        .addField(`${prefix}stop`, 'Stopt die Musik')
        .addField(`${prefix}reload <command>`, 'Reloaded nen Command');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};