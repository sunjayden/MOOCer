const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const os = require('os');

// Import routes
const authRoute = require('./routes/auth');
const courseRoute = require('./routes/course');

// Import environment variable
dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => console.log('Connected to DB!')
);

// Middlewares
app.use(bodyParser.json());

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/courses', courseRoute);

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({
	username: os.userInfo().username
}));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));