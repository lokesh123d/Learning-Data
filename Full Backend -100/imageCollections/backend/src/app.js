const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const imageRoute = require('./routes/image.route.js');
app.use('/image',imageRoute);


module.exports = app;