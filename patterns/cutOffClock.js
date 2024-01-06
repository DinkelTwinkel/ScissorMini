const KimoTracker = require('../models/kimoTracker');
const { ActivityType } = require('discord.js');

module.exports = async (client) => {

    console.log ('cutoff clock');

    const millisecondsInDay = 24 * 60 * 60 * 1000;

    const currentDate = new Date();
    const nextUTCDay = new Date(currentDate.getTime() + millisecondsInDay);
    nextUTCDay.setHours(12);
    nextUTCDay.setMinutes(0);
    nextUTCDay.setSeconds(0);

    const differenceMiliUTC = nextUTCDay.getTime() - currentDate.getTime();

    console.log (differenceMiliUTC);
    console.log (currentDate.getTime());
    console.log (nextUTCDay);

    const differenceSeconds = differenceMiliUTC / 1000;
    const differenceMinutes = Math.floor( differenceSeconds / 60);

    client.user.setPresence({
        activities: [{ name: `${differenceMinutes} minutes Left`, type: ActivityType.Watching }],
        status: 'dnd',
    });

};
