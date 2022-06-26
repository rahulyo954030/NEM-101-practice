const sub = (a,b)=>{
    return a-b
}
const mul = (a,b)=>{
    return a*b
}
const add = (a,b)=>{
    return a+b
}
const div = (a,b)=>{
    return a+b
}
const crypto = require("crypto")

const random = (a,b)=>{
    return crypto.randomInt(a,b);
}

const sin = (a)=>{
    return Math.sin(a);
}

const cos = (a)=>{
    return Math.cos(a)
}

const tan = (a)=>{
    return Math.tan(a)
}

module.exports = { sub, mul, add, div, random, sin, cos, tan}