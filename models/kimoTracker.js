const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kimoTracker = new Schema({

	serverId: { type: String, required: true, unique: true },
	currentDate: { type: Number, required: true },
	nextDate: { type: Number, default: 0 },
	kimoActive: { type: Boolean, default: false },
	dailyDeadline: { type: Number, default: 12 },
	safeRoleID: { type: String, default: 'n/a' },
	dangerRoleID: { type: String, default: 'n/a' },
	deadRoleID: { type: String, default: 'n/a' },
	adminRoleID: { type: String, default: 'n/a' },
	kimoChannel: { type: String, default: 'n/a' },
	botLogChannel: { type: String, default: 'n/a' },
	participantRoleID: { type: String, default: 'n/a' },
	introductionChannelID: { type: String, default: 'n/a' },

}, { timestamps: true });

const KimoTracker = mongoose.model('kimoTracker', kimoTracker);
module.exports = KimoTracker;