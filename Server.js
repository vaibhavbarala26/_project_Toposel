require("dotenv").config()
const express = require("express")
const cookieParser= require("cookie-parser")
const connectDB = require("./config/Database")
const connection = require("./config/Database")
const router = require("./routes/UserRoutes")
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/users" , router)
connection()
.then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log(`✅ Database connected successfully`);
        console.log(`🚀 Server is running on port ${process.env.PORT}`);
    })
})