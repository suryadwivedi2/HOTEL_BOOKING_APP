const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json())
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))

const userroute = require('./routes/user');
const hotelroute = require('./routes/hotel')



const port = process.env.PORT;

app.use('/user', userroute);
app.use('/hotel', hotelroute)

mongoose.connect(`mongodb+srv://bcae208924402018:${process.env.DB_PASSWORD}@cluster0.ieth7oj.mongodb.net/hotelbookingapp?retryWrites=true&w=majority`)
    .then(result => {
        app.listen(port, () => console.log(` Connected! server running on port ${port}`));
    })
    .catch(err => console.log(err));
    