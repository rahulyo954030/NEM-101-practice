const express = require("express")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const connection = require("./storage/db")

const app  = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/auth", authRouter)
app.use("/profile", userRouter)

app.listen(3030, async()=>{
    await connection;
    console.log("connected to db");
    console.log("server started on http://localhost:3030");
})