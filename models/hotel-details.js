const mongoose = require('mongoose')
const schema = mongoose.Schema

const hotelSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true
    },
    freebreakfast: {
        type:Boolean,
        required: true
    },
    gym: {
        type:Boolean,
        required: true
        
    },
    pool: {
        type:Boolean,
        required: true
    },
    spa: {
        type:Boolean,
        required: true
    },
    wifi: {
        type:Boolean,
        required: true
    },
    resturant: {
        type:Boolean,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
   
})

module.exports = mongoose.model('hotel', hotelSchema)