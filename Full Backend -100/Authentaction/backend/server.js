const app = require('./src/app.js');
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');



const PORT = process.env.PORT

const MONGO_URI = process.env.MONGO_URI||'mongodb://localhost:27017/authentication';
console.log(MONGO_URI);
function connectDB(){
mongoose.connect(`${MONGO_URI}`)
.then((res)=>{
    console.log('MongoDb Connected Successfully...');
})
.catch((err)=>{
    console.log(err);
})
};



app.listen(PORT,()=>{
    console.log('Server is Running at '+ PORT);
    connectDB();
})
