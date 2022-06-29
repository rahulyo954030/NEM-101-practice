const express = require("express")
const {performance} = require("perf_hooks")
const app = express()
const dnsRoutes = require("./routes/dns.routes")
const cors = require("cors")


// middlewares------------------------------------------->
app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use("/dns", dnsRoutes)


app.use((req,res, next)=>{
   console.log(req.url)
   next();
    console.time();
})

app.use((req,res, next)=>{
    console.log(performance.now())
    
    next()
    console.log(performance.now())

 })

const checkAdmin = (req,res,next)=>{
    console.log(req.query);
    if(req.query.admin == "true"){
        next()
    }
    else{
        res.send("not a admin")
    }
}
app.use(checkAdmin)



// middlewares------------------------------------------->

// path ------------------------------------------------->
app.get("/",(req,res )=>{
    res.send("hello")
})
app.get("/home",(req,res )=>{
    
        res.send("hello")
   
})


app.listen(4500, ()=>{
    console.log("server started on http://localhost:4500")
})