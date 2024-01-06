const KimoTracker = require('../models/kimoTracker');
const UserState = require('../models/userState');
const slice = require('./slice');
const updateUserState = require('./updateUserState');

module.exports = async (client) => {

    console.log ('not yet time');

    const currentDate = new Date();
    const currentUTCHour = currentDate.getUTCHours();

    const result = await KimoTracker.findOne({ serverId: '1192955466872004669' });
    
    if (result == null) return;

        // perform twelve o clock check
        if (currentUTCHour >= 12) {
            // paste twelve o clock find next date.

                if (currentDate.getDate() >= result.nextDate) {

                const millisecondsInDay = 24 * 60 * 60 * 1000;
                const nextUTCDay = new Date(currentDate.getTime() + millisecondsInDay);
                result.nextDate = nextUTCDay.getDate();

                await result.save();

                const KimoServer = await client.guilds.fetch('1192955466872004669');
                const botLogChannel = KimoServer.channels.cache.get('1192963290096218142');
                botLogChannel.send('NEW DAY, SLICING...');

                slice(client);

            }
        }

};
