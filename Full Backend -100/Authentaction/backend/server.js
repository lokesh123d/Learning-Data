const app = require('./src/app.js');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./src/db/db.js');


const PORT = process.env.PORT

const MONGO_URI = process.env.MONGO_URI||'mongodb://localhost:27017/authentication';




app.listen(PORT,()=>{
    console.log('Server is Running at '+ PORT);
    connectDB();
})
