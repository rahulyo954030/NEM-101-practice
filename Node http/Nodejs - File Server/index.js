const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
    
   if(req.url === "/"){
    res.end("Hello World")
   }
   if(req.url === "/public"){
    res.end(JSON.stringify([
        {name:"rahul singh",
        age:26,
        location: "Delhi"},
        {name:"nitesh",
        age:20,
        location: "Delhi"},
        {name:"Nihal",
        age:26,
        location: "Benguluru"},
        {name:"Nrupul",
        age:40,
        location: "Benguluru"}
    ]))
   }
   if(req.url === "/public/other"){
    res.end(JSON.stringify([
        {name:"Ram",
        age:26,
        location: "Delhi"},
        {name:"nShyam",
        age:20,
        location: "Delhi"},
        {name:"Rohan",
        age:26,
        location: "Benguluru"},
        {name:"Mohan",
        age:40,
        location: "Sohan"},
        {name:"rahul singh",
        age:26,
        location: "Delhi"},
        {name:"Ajay",
        age:20,
        location: "Delhi"},
        {name:"Vijay",
        age:26,
        location: "Tony stark"},
        {name:"Nrupul",
        age:40,
        location: "Benguluru"}
    ]))
   }
   if(req.url === "/file"){
    fs.readFile("./test.js", {encoding:"utf-8"}, (err,data)=>{
        if(err){
            res.end("error")
        }
        else{
            res.end(data)
        }
    })
   }

//    if(req.url === "/quiz"){
//     res.setHeader("content-type", "text/html")
//     const data = fs.readFile("./quiz.html", {encoding:"utf-8"})
//    res.end(data)
// }

})
server.listen(8080,()=>{
    console.log("server started on localhost:8080")
})