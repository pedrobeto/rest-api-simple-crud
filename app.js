const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// app.use('/posts', () => {
//    console.log('Hello, this is a middleware running');
// })

// Routes
app.get('/', (req, res) => {
    res.send('We are at home!')
})

mongoose.set('useUnifiedTopology', true);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!');
});

// Listening to the server
app.listen(3000);