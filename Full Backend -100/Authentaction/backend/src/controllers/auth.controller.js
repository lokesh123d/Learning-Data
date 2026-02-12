const dotenv = require('dotenv').config();
const userModel = require('../models/auth.model.js');
const jwt = require('jsonwebtoken');
const register = async (req,res)=>{
const {name,email,password} = req.body;
try{
    const newUser = await userModel.create({
        name,email,password
    });

const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET_KEY);
res.cookie('token',token);


res.status(200).json({
    message:'User Registered Successfully',
        user:newUser,
token
    })
}catch(err){
    res.status(500).json({
        message:'User Registration Failed',
        error:err.message
    })
}
    
}


module.exports = { register };