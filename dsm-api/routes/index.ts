import express, { Router } from 'express';
import { Url } from '../models/Url';

const router: Router = express.Router();

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