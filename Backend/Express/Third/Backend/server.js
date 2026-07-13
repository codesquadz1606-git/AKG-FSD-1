const app = require("./src/app");
const dbConnect = require("./src/db/db");
const dotenv=require("dotenv").config();

const PORT=process.env.PORT

dbConnect()

app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})