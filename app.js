// Importing an path and express module
const express = require('express');
const path  = require('path');
const port = 80;

// Creating an Express app
const app = express();

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));


// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// END POINTS
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})

app.get('/about', (req,res)=>{
    res.status(200).render('about.pug')
})

app.get('/services', (req,res)=>{
    res.status(200).render('services.pug')
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})
// START THE SERVER 
app.listen(port , ()=>{
    console.log(`Server started successfully on ${port}`)
})
