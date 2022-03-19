const express = require('express');
const router = express.Router();
const shortId = require('shortid');
const validator = require('valid-url');

const Url = require('../models/Url')

router.post('/short', async (req, res) => {
	const { longUrl } = req.body;
	const baseUrl = 'http://localhost:3333'

	// Validate base URL
	if (!validator.isUri(baseUrl)) {
		res.status(401).json('invalid base URL');
	}

	// Generate URL code
	const urlCode = shortId.generate();

	// Validate long URL
	if (validator.isUri(longUrl)) {
		try {
			let url = await Url.findOne({ longUrl });

			if (url) {
				res.json(url);
			} else {
				const shortUrl = baseUrl + '/' + urlCode;

				url = new Url({
					longUrl,
					shortUrl,
					urlCode,
					date: new Date()
				});

				await url.save();

				res.json(url);
			}
		} catch (err) {
			console.error(err);
			res.status(500).json('Internal server error');
		}
	} else {
		res.status(401).json('Invalid URL')
	}
});

module.exports = router;