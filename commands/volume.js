const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Es wird nix gespielt.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`🎵 Volume: **${queue.volume}/100**`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Wähle eine lautstärke zwischen 1 und 100!`, `${config.prefix}volume <volume>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, wähle bitte nur zwischen 1 und 100!`, `${config.prefix}volume <volume>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 Du hast das volume auf **${queue.volume}/100** geändert`);
};

module.exports.help = {
    name: 'volume',
    aliases: ['vol']
};