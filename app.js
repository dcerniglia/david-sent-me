const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB();

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/index'));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

