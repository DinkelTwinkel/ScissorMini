const KimoTracker = require('../models/kimoTracker');
const UserState = require('../models/userState');
const updateUserState = require('./updateUserState');

module.exports = async (client) => {


        const KimoServer = await client.guilds.fetch('1192955466872004669');
        const botLogChannel = KimoServer.channels.cache.get('1192963290096218142');

        const members = await KimoServer.members.fetch();

        members.forEach( async member => {

            const userData = await UserState.findOne ({ userID: member.user.id })

            if (userData) {
            botLogChannel.send (`Slicing ${member}, changing state to ${userData.currentState} to ${staggerState(userData.currentState)}`, {"allowed_mentions": {"parse": []}})
            userData.currentState = staggerState(userData.currentState);
            userData.postedToday = false;
            await userData.save();
            }
            else {
                botLogChannel.send (`STARTING KIMO FOR ${member}, STATE SET TO DANGER`, {"allowed_mentions": {"parse": []}})
            }
            updateUserState(member);

        });


};

function staggerState(currentState) {

    if (currentState === 'SAFE') {
        return 'DANGER';
    } 
    else if (currentState === 'DANGER'){
        return 'DEAD';
    }

}