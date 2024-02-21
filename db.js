const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dharadarsh0:Ad23adarsh@cluster0.hilwbtv.mongodb.net/')
.then(() => {
    console.log("connected to MongoDB");
})
.catch((err) => {
    console.error('error connecting to MongoDB',err)
})

const todoSchema = new mongoose.Schema({
    title : String,
    description : String
})

const todo = mongoose.model("todos", todoSchema)

module.exports = todo
