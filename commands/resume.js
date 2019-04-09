const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵 Music läuft wieder`);
    }

    return [message.delete(), utils.timed_msg('⚠ Es wird nix gespielt.', 5000)];
    
};

module.exports.help = {
    name: 'resume',
    aliases: []
};