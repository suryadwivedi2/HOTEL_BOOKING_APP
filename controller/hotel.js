require('dotenv').config();
const Hotel = require('../models/hotel-details');

exports.searchHotels = async (req, res, next) => {
    try {
        const hotel = await Hotel.find();
        res.staus(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)

    }

}


