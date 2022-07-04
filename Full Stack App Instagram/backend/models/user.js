const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    name: {type: String, min:3},
    username: String,
    email: String,
    password: String,
    mobile: Number,
    country: String,
    gender: {
        type : String,
        enum: ["Male", "Female", "Unspecified"]
    }
})

const User = model("User", UserSchema)

module.exports = User;

/*
{
    "name": "Rahul",
    "username": "rahul1234",
    "email": "rahul@gmail.com",
    "password": "rahul",
    "mobile" : 8888888888,
    "country" : "India",
    "gender" : "Male"
}
*/