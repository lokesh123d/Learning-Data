const express = require('express');
const app = express();
const note = require('./routes/note.route.js');

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/notes',note);



app.get('/',function(req,res){
    res.status(201).json({message:"Here is a Data"});
})


module.exports = app;

