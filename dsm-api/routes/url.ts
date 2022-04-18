import express from 'express';
import cors from 'cors';
import shortId from 'shortid';
import validator from 'valid-url';
import { Url } from '../models/Url';



const router = express.Router();

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/short', cors(corsOptions), async (req, res) => {
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

				url = await new Url({
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