const mongoose = require('mongoose')

//data base connection
mongoose.connect('mongodb://127.0.0.1:27017/book_directory')
.then(()=>console.log('Mongodb Database Connectted'))
.catch((err)=>console.log('Mongodb Database Connection fail',err))