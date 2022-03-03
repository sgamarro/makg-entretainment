var express = require('express');
var app = express()
var port = 3000
var path = require('path')
var nodemailer = require('nodemailer')

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")))


app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/contact",(req,res) =>{
    res.sendFile(path.join(__dirname,"contact.html"))
})
app.get("/videos", (req,res) =>{
    res.sendFile(path.join(__dirname,"videos.html"))
})

app.listen(port, () =>{
    console.log(`app listening on host: ${port}`)
})


app.post('/contact/send', function(req,res){
    var trasporter = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user: 's.albertogamarro5@gmail.com',
            pass:'hdklrdwivwpsnmot'
        }
    })
    var mailOptions ={
        from: 'Sebastian <s.albertogamarro5@gmail.com>',
        to:'s.albertogamarro5@gmail.com',
        subject: 'Website Submission',
        text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };
trasporter.sendMail(mailOptions, function(error,info){
    if (error){
        console.log(error);
        res.redirect('/'); 
    }else{
        alert('message was sent');
       res.redirect('/')
    }
})
    
})