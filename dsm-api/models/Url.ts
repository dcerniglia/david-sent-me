import mongoose from 'mongoose';

export const UrlSchema = new mongoose.Schema({
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

export const Url = mongoose.model('Url', UrlSchema);