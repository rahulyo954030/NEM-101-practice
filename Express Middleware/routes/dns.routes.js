const {Router} = require("express")

const dns = require("dns")
const dnsRoutes = Router()

dnsRoutes.get("/getmeip", (req,res)=>{
    res.send("hey you are in DNS section")

})

dnsRoutes.post("/getmeip", (req,res)=>{
    const hostname = req.body.website_name;
    dns.lookup(hostname, (err, address, family)=>{
        if(err){
            res.send(err)
        }
        res.send(address)
    })
    
})
module.exports= dnsRoutes