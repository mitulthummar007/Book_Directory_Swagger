const mongoose = require("mongoose");
const APP_STATUS = require("../constatnts/app_status");
const getuser = require("../middleware/userUtill/getuser");
const bookTable = require("../models/bookSchema");

//add book controller
const addbookdetails = async(req , res)=>{
    try{
        let theUser = await getuser(req , res)
        if(theUser){
            let {bookname ,authorname,bookimg,bookversion,noofpage} = req.body
            let bookObj = await bookTable.findOne({bookname : bookname})
            if(bookObj){
                return res.status(403).json({
                    msg : "Book already added"
                })
            }
            
        let newbook = {
                bookname : bookname,
                authorname : authorname,
                bookimg : bookimg,
                bookversion : bookversion,
                noofpage : noofpage
            }
            
            let thebook = await new bookTable(newbook).save();
            if(thebook){
                return res.status(200).json({
                    status : APP_STATUS.SUCCESS,
                    msg : "Book added successfully",
                    data : thebook
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error : error
        })
    }
}
//updatebook controller
const updatebook = async(req , res)=>{
    let {bookname ,authorname,bookimg,bookversion,noofpage} = req.body
    try{
        let theUser = await getuser(req , res)
        if(theUser){
            let {bookId} = req.params;
            let mongoBookId = new mongoose.Types.ObjectId(bookId)
            
            let newbook = {
                bookname : bookname,
                authorname : authorname,
                bookimg : bookimg,
                bookversion : bookversion,
                noofpage : noofpage
                }
            let updatebook = await bookTable.findByIdAndUpdate(mongoBookId,{
                $set : newbook
            },{new : true})
            const existingBook = await bookTable.findById(mongoBookId);
            
            if (!existingBook) {
              return res.status(404).json({
                status: APP_STATUS.FAILED,
                msg: "Book not found",
                data: null,
              });
            }            
            
            if(updatebook){
                return res.status(200).json({
                    status : APP_STATUS.SUCCESS,
                    msg : "Book update successfully",
                    data : updatebook
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error : error
        })
    }
}

//delete book by id
const deletebook = async(req , res)=>{
    try{
        let theUser = await getuser(req , res)
        if(theUser){
            let {bookId} = req.params;
            let mongoBookId = new mongoose.Types.ObjectId(bookId)
            const existingBook = await bookTable.findById(mongoBookId);
            
            if (!existingBook) {
              return res.status(404).json({
                status: APP_STATUS.FAILED,
                msg: "Book not found",
                data: null,
              });
            }            
            let deletebook = await bookTable.findByIdAndDelete(mongoBookId)
            
            if(deletebook){
                return res.status(200).json({
                    status : APP_STATUS.SUCCESS,
                    msg : "Book delete successfully",
                    data : deletebook
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error : error
        })
    }
}
//get all book directory
const getallbook = async(req , res)=>{
    try{
        let theUser = await getuser(req , res)
        if(theUser){
            let theBook = await bookTable.find()
            if(theBook){
                return res.status(200).json({
                    status : APP_STATUS.SUCCESS,
                    msg : "Books",
                    data : theBook
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error : error
        })
    }
}
//searby book name 
const searchByBook = async(req , res)=>{
    try{
        let theUser = await getuser(req , res)
        if(theUser){
            let {bookname} = req.params;
            let thebook = await bookTable.findOne({bookname : bookname})
            if(thebook){
                return res.status(200).json({
                    status : APP_STATUS.SUCCESS,
                    msg : "Book",
                    data :thebook
                })
            }else{
                return res.status(404).json({status:APP_STATUS.FAILED,msg:"Book Not Found",data:null})
            }
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error : error
        })
    }
}

// single book show by id
const singlebook = async(req , res)=>{
    try{
        let theUser = await getuser(req , res)
        if(theUser){
            let {bookId} = req.params;
            let mongoBookId = new mongoose.Types.ObjectId(bookId)
            
            let thebook = await bookTable.findById(mongoBookId)
            
            if(thebook){
                return res.status(200).json({
                    status : APP_STATUS.SUCCESS,
                    msg : "Book show",
                    data : thebook
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error : error
        })
    }
}

module.exports = {addbookdetails,updatebook,deletebook,getallbook,searchByBook,singlebook}