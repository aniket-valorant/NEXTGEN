const mongoose = require('mongoose')

const moiveSchema = new mongoose.Schema(
    {
        moivename: String,
        hero: String,
        heroine: String,
        year: Number,
        rating:Number,
        genre:String

    })

    const Moivemodel = mongoose.model("moivedata", moiveSchema);
    module.exports = Moivemodel