
require('dotenv').config();
const app=require("./src/app.js");
const connectToDB=require('./src/config/db.js')




connectToDB();









const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`sever is listening at port ${port}`);
})