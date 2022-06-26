const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
    
   if(req.url === "/"){
    res.setHeader("context-type", "text/plain")
    res.end("Bench Marking")
   }
//    if(req.url === "/file"){
//     fs.readFile("./test.js", {encoding:"utf-8"}, (err,data)=>{
//         if(err){
//             res.end("error")
//         }
//         else{
//             res.end(data)
//         }
//     })
//    }
if(req.url === "/file"){
    const readStream = fs.createReadStream("./test.js", {encoding: "utf-8"})
    readStream.pipe(res)
   }

})
server.listen(4040,()=>{
    console.log("server started on localhost:4040")
})

// type in terminal "npx autocannon http://localhost:4040/file" to check benchmark