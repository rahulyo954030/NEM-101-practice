const express = require("express")
const fs = require("fs")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.text())

app.get("/", (req,res)=>{
    res.send("hello world")
})
app.get("/products", (req,res)=>{
    res.send([
        {"id":1,
    "device":"Mobile"},
    {"id":2,
    "device":"TV"},
    {"id":3,
    "device":"Washing Mashing"},
    ])
})

app.post("/send", (req,res)=>{
    
    // to store the data in data.txt

    const  data = JSON.stringify(req.body)
    fs.appendFile("./data.txt",data,{encoding:"utf-8"} , (err,data)=>{
        if(err){
            console.log("error")
            res.send("Error")
        }
        console.log(data)
    })

    // to store the data in data.txt


    // to store the JSON data in db.json
    const  dataFromClient = req.body
    fs.readFile("./db.json",{encoding:"utf-8"} , (err,data)=>{
        //      (file path)   (encoding)       (call function)
        if(err){
            console.log("error")
            res.send("Error")
        }
        console.log(dataFromClient)
        const parsedData = JSON.parse(data)
        parsedData.messages =[...parsedData.messages, dataFromClient]

        fs.writeFile("./db.json", JSON.stringify(parsedData), "utf-8", ()=>{
            res.send("messages added")
        })
    })

    // to store the JSON data in db.json

    console.log(req.body);
    res.send(req.body)

    
 




 })
 // delete
 app.delete("/messages/:id", (req, res)=>{
    const {id} = req.params

    fs.readFile("./db.json", {encoding:"utf-8"}, (err,data)=>{
       const parsedData = JSON.parse(data)

       const messages = parsedData.messages
       const remaining_messages = messages.filter((msg) => msg.id != id)

       parsedData.messages = remaining_messages
       fs.writeFile("./db.json", JSON.stringify(parsedData), "utf-8", ()=>{
           res.send(`message ${id} was successfully deleted`)
       })
    })   
})
// delete

//  Update product

app.put("/messages/id", (req, res) => {
    const {id} = req.params; //object {id: 1}

    fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
        const parsed = JSON.parse(data);
        parsed.messages = parsed.messages.replace((el) => el.id == id);
                    // file name,      data,              encoding,   callback
        fs.writeFile("./db.json", JSON.stringify(parsed), "utf-8", () => {
            res.send("message update")
        });
    });
})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log("server started on localhost:8080")
})


// 1st step write -> // const PORT = process.env.PORT || 8080 
// app.listen(PORT, ()=>{ 
// console.log("server started on localhost:8080") // 
// })

// 2nd step -> // create Procfile and write inside that file -> web: node index.js

// 3rd create -> "gitignore" file insidethat write -> node_modules/

// 4th -> 
// npm i -g heroku 
// heroku login 
// heroku git:clone -a app name 
// cd rahulsingh-backend-app 
// git add . 
// git commit -am "make it better" 
// git push heroku master