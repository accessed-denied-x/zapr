const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.use('/login', (req, res) => {
	res.send({
		token: 'test123',
	});
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
