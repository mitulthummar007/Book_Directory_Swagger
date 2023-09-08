const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookname : {type : String , required : true},
    authorname : {type : String , required : true},
    bookimg : {type : String , required : true},
    bookversion : {type : String , required : true},
    noofpage : {type : Number , required : false},

},{timestamps : true});

const bookTable = mongoose.model('books',bookSchema)

module.exports = bookTable