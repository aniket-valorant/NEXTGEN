const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const mobileModel = require('./mobilemodel/mobiledata')

app.use(express.json())
console.log("hello")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addMobileData', async (req, res) => {
  try {const newdata = new mobileModel(req.body)
    await newdata.save();
    res.send('Data sent Successfully')
  } catch (error) {
    console.log('error')
  }
})

app.get('/getMobileData', async (req, res) => {
  try {
    const newdata = await mobileModel.find({});
    res.json(newdata)
    console.log(newdata) 
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