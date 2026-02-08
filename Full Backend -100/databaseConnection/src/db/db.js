const mongoose = require('mongoose');

 async function connectMongodb(){
    await mongoose.connect('mongodb://localhost:27017/fullbackend-100')
    .then(function(){
        console.log('Mongodb is connected....');
    })
    .catch((err)=>{
        console.log(`Databse Error : ${err}`);
    })
}

 module.exports = connectMongodb;
