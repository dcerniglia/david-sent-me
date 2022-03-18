const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://dcerniglia:e9HtDMMM%v^sp031*G@cluster0.ytij9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {
	usenNewUrlParser: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

module.exports = connection;