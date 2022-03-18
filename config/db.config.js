const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://dcerniglia:e9HtDMMM%v^sp031*G@cluster0.ytij9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
	try {
		mongoose.connect(DB_URI, {
			usenNewUrlParser: true,
			useUnifiedTopology: true
		});
	}
	catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}

module.exports = connectDB;