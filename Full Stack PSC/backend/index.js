const express =  require("express")
const authRouter = require("./routes/auth.routes")
const connection = require("./db")

const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/auth", authRouter)
// middlewares

app.get("/", (req,res)=>{
    res.send("home page")
})
 
app.listen(8080, async()=>{
    try{
        await connection
        console.log("connect to db successfully");
    }
    catch{
        console.log("something went wrong while connecting to db");
    }
    
    console.log("server started on http://localhost:8080");
})