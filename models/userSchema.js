const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {type : String , required : true},
    email : {type : String , required : true},
    password : {type : String , required : true}
},{timestamps : true});

const UserTable = mongoose.model('users',UserSchema)

module.exports = UserTable