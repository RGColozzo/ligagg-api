const express = require("express")

const app = express()

app.listen(3333)

app.get('/', async(req, res) =>{
    res.send("just testing")
})