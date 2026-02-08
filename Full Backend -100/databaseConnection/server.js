const app = require('./src/app.js');
const databse = require('./src/db/db.js');


app.listen(8000,()=>{
    console.log('server is running at port 8000')
    databse();
})