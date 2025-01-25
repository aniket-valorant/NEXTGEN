const express = require('express');
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', (req, res) => {
    const {name,age} = req.body;
    res.send('Hello World! \n' + name + age)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})