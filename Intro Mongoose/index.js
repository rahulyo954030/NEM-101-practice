const express = require("express")
const {connection, studentModel} = require("./db")

const app = express()


app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Home")
})

app.get("/students", async(req,res)=>{
    
    const result = await studentModel.find(req.query,{__v : 0}).skip((pageNo-1)*perPage).limit(perPage)  //limit for pagination
    res.send(result) 
})

app.post("/students", async(req,res)=>{
    const result = await studentModel.find(req.body)
    await result.save()
    res.send(result) 
})

app.listen(7000, async ()=>{
    try{
        await connection
        console.log("connection to DB sucessfull");
    }
    catch{
        console.log("Failed to connect to DB");
    }
    console.log("server successfully started on http://localhost:7000");
})