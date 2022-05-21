import express, { Router } from 'express';
import cors from 'cors';
import { Url } from '../models/Url';

const router: Router = express.Router();
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
router.all('*', cors(corsOptions));

router.get('/:code', async (req, res) => {
	try {
		const url = await Url.findOne({ urlCode: req.params.code});
	if(url) {
		return res.redirect(url.longUrl)
	} else {
		return res.status(404).json('URL not found');
	}
	} catch (err) {
		console.error(err)	;
		res.status(500).json('Internal server error');
	}
});

module.exports = router;