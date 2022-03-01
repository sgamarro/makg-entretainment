var express = require('express');
const res = require('express/lib/response');
var app = express()
var port = 3000
var path = require('path')

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/about",(req,res) =>{
    res.sendFile(path.join(__dirname,"about.html"))
})
app.get("/videos", (req,res) =>{
    res.sendFile(path.join(__dirname,"videos.html"))
})

app.listen(port, () =>{
    console.log(`app listening on host: ${port}`)
})