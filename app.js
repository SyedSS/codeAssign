//start 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.mongoURI;
mongoose
.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const users = require("./routes/api/users");
const data = require("./routes/api/data");
    

const passport = require('passport');
require('./config/passport')(passport);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

//routes used
app.use("/api/users", users);
app.use("/api/data", data);


//response
app.use(passport.initialize());

//open socket
app.listen(port, () => console.log(`Server is running on port ${port}`));


const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}