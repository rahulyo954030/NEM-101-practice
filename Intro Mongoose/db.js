const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb://localhost:27017/web16")

// const connectDb = async ()=>{
//     //connect
//     const conn = await connection
//     console.log("connection succesful to database")

//     const student1 = new studentModel({
//         name : "Sonu",
//         age : 21,
//         city: "Delhi",
//         hobbies : ["coding", "gaming"]
//     })
//     const saveStudent = await student1.save()
//     console.log("student 1 saved");

    // read
    // const students = await studentModel.find({},{_v:0})
    // console.log(students)
    // conn.disconnect()
// }

// connectDb()

//Schema
const studentSchema = mongoose.Schema({
    name: {type : String, required : true},
    age:  {type : Number, required : true},
    city: {type : String, required : true},
    hobbies :{type : [String, Number], required : true}
})
//Model
const studentModel = mongoose.model("student", studentSchema)

module.exports ={
    connection,
    studentModel
}