const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Moivemodel = require('./modules/moivesmodel');
const cors = require('cors')
app.use(cors())
app.use(express.json())

console.log("hello")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addMoiveData', async (req, res) => {
  try {const newdata = new Moivemodel(req.body)
    await newdata.save();
    console.log('Data sent Successfully')
    res.send('Data sent Successfully')
  } catch (error) {
    console.log('error')
  }
})

app.get('/getMoiveData', async (req, res) => {
  try {
    const newdata = await Moivemodel.find({});
    console.log("Data fetched")
    return res.json(newdata)
  } catch (error) {
    console.log('error')
  }
})

mongoose.connect('mongodb+srv://db1:WEOa1IT3LtotdHLW@cluster0.clyho.mongodb.net/').then(() =>
console.log("Connected to mongo")
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  