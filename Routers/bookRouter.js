
const express = require('express')
const tokenVeryfy = require('../middleware/tokenveryfier')
const { body } = require('express-validator')
const multer = require('multer')
const path = require('path')
const {addbookdetails, updatebook, deletebook, getallbook, singlebook, searchByBook} = require('../controllers/bookcontroller')

const bookRouter = express.Router()

/*
* @url : http://localhost:8000/api/book/addbookdetail
  @method : post
*/
// const imageStorage = multer.diskStorage({
//   // Destination to store image     
//   destination: 'images', 
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() 
//            + path.extname(file.originalname))
//           // file.fieldname is name of the field (image)
//           // path.extname get the uploaded file extension
//   }
// });
// const imageUpload = multer({
//   storage: imageStorage,
//   limits: {
//     fileSize: 1000000 // 1000000 Bytes = 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg)$/)) { 
//       // upload only png and jpg format
//       return cb(new Error('Please upload a Image'))
//     }
//     cb(undefined, true)
//   }
// })
// console.log(imageUpload);
bookRouter.post('/addbookdetail',[
    body('bookname').not().isEmpty().withMessage("bookname is required"),
    body('authorname').not().isEmpty().withMessage("authorname is required"),
    body('bookimg').not().isEmpty().withMessage("bookname is required"),
    body('bookversion').not().isEmpty().withMessage("bookname is required")
],tokenVeryfy,async(req , res)=>{
    await addbookdetails(req , res)
});

/** 
* @url : http://localhost:8000/api/book/update/:bookId
* @method : put
*/
bookRouter.put('/update/:bookId',[
    body('bookname').not().isEmpty().withMessage("bookname is required"),
    body('authorname').not().isEmpty().withMessage("authorname is required"),
    body('bookimg').not().isEmpty().withMessage("bookname is required"),
    body('bookversion').not().isEmpty().withMessage("bookname is required")
],tokenVeryfy,async(req , res)=>{
    await updatebook(req , res)
});


/*
* @url : http://localhost:8000/api/book/delete/:bookId
  @method : delete
*/
bookRouter.delete('/delete/:bookId',tokenVeryfy,async(req , res)=>{
    await deletebook(req , res)
});


/*
* @url : http://localhost:8000/api/book/getallbook
  @method : get
*/
bookRouter.get('/getallbook',tokenVeryfy,async(req , res)=>{
    await getallbook(req , res)
});

/*
* @url : http://localhost:8000/api/book/Searchbybook/bookname
  @method : get
*/
bookRouter.get('/Searchbybook/:bookname',tokenVeryfy,async(req , res)=>{
    await searchByBook(req , res)
});


/*
* @url : http://localhost:8000/api/book/singlebook/:bookId
  @method : post
*/
bookRouter.get('/singlebook/:bookId',tokenVeryfy,async(req , res)=>{
    await singlebook(req , res)
});
module.exports = bookRouter