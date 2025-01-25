const express = require("express");
const app = express()
const users = require('./Data/test_data.json')
const PORT = 7000;

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join("")}
        </ul>
    `
    res.send(html)
})

// RESTAPI

app.get('/api/users', (req, res) => {
    return res.json(users)
})


app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id )
    return res.json(user); 
})
.delete((req, res) => {
     return res.json({
        status:"pending"
    })
})
.patch((req,res) => {
    return res.json({
        status:"pending"
    })
})


app.post('/api/users', (req, res) => {
    return res.json({status:"pending"});
})

app.listen(PORT, () => { console.log("server Started at port " + PORT) })
