const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/login', (req, res) => {
	res.send({
		token: 'test123',
	});
});

app.use('/api/transactions', transactions);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
