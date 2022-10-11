const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get("/ping", function(req,res) {
res.send('This is the test')
} )

app.get("/", function(req,res) {
    res.send('Welcome to home page')
    } );

app.listen(port, () => console.log(`app running in port ${port}`))
