const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://localhost:27017/project1")

module.exports = connection;