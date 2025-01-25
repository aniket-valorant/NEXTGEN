const mongoose = require('mongoose')

const mobileSchema = new mongoose.Schema(
    {
        name: String,
        brand: String,
        ram: Number,
        storage: Number,
        price: Number,
        image: String
    })

    const mobileModel = mongoose.model("moivedata", mobileSchema);
    module.exports = mobileModel;