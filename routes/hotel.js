const express = require('express');


const router = express.Router();


const hotelcontroller = require('../controller/hotel');


router.get('/search-hotel', hotelcontroller.searchHotels);



module.exports = router;