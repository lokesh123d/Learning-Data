const app = require('./src/app.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/imageCollectionsDB";

function connectDB() {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("MongoDB Connected Successfully");
        }).catch((err) => {
            console.log("MongoDB Connection Failed", err);
        });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
