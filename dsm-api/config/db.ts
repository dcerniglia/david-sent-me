import mongoose from "mongoose";

const DB_URI = 'mongodb+srv://dcerniglia:david123@cluster0.g2ktv.mongodb.net/david-sent-me?retryWrites=true&w=majority';
const connectDB = async () => {
	try {
		mongoose.connect(DB_URI, {
	});
	console.log('Database connected')
	}
	catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}

export default connectDB;