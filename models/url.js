const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
	longUrl: {
		type: String,
		required: true
	},	
	shortUrl: {
		type: String,
		required: true
	},
	date: {
		type: String,
		default: Date.now,
	},
	urlCode: {
		type: String,
		required: true,
	}	
});

module.exports = mongoose.model('Url', UrlSchema);