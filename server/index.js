const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const authRoute = require('./routes').auth;
const collectionRoute = require('./routes').collection;
const passport = require('passport');
require('./config/passport')(passport);

// connect to DB
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connect to MongoDB Altas');
}).catch(e => {
    console.log(e);
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', authRoute);
app.use('/api/collection', passport.authenticate('jwt', { session: false }), collectionRoute)


app.listen(8080, (req, res) => {
    console.log("Server is running on port 8080.");
})