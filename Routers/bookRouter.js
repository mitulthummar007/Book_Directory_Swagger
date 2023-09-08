
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
 * @swagger
 * /api/book/addbookdetail:
 *   post:
 *     summary: Add Book detail
 *     tags: 
 *       - Book Table
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: "x-auth-token"
 *         in: "header"
 *         required: true
 *         description: Enter a user Token
 *         schema:
 *           type: string
 *           format: "Bearer [token]"   
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               bookname:
 *                 type: string
 *               authorname:
 *                 type: string
 *               bookimg:
 *                 type: string
 *               bookversion:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Book added successfully!!!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: object
 *       '403':
 *         description: Book already added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 */

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
/**
 * @swagger
 * /api/book/update/{bookId}:
 *   put:
 *     summary: Update Book detail
 *     tags:
 *       - Book Table
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: "x-auth-token"
 *         in: "header"
 *         required: true
 *         description: Enter a user Token in the format 'Bearer [token]'
 *         schema:
 *           type: string
 *       - name: bookId
 *         in: path
 *         required: true
 *         description: ID of the book to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               bookname:
 *                 type: string
 *               authorname:
 *                 type: string
 *               bookimg:
 *                 type: string
 *               bookversion:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Book updated successfully!!!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       '404':
 *         description: Book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: null
 *       '401':
 *         description: Unauthorized - Invalid token or no token provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       '403':
 *         description: Forbidden - Invalid user request or book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 */


/*
* @url : http://localhost:8000/api/book/delete/:bookId
  @method : delete
*/
bookRouter.delete('/delete/:bookId',tokenVeryfy,async(req , res)=>{
    await deletebook(req , res)
});
/**
 * @swagger
 * /api/book/delete/{bookId}:
 *   delete:
 *     summary: Delete a Book.
 *     tags:
 *       - Book Table
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: bookId
 *         in: path
 *         required: true
 *         description: ID of the book to delete.
 *         schema:
 *           type: string
 *       - name: "x-auth-token"
 *         in: "header"
 *         required: true
 *         description: Enter a user Token in the format 'Bearer [token]'
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Book deleted successfully!!!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       '404':
 *         description: Book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: null
 *       '401':
 *         description: Unauthorized - Invalid token or no token provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 */


/*
* @url : http://localhost:8000/api/book/getallbook
  @method : get
*/
bookRouter.get('/getallbook',tokenVeryfy,async(req , res)=>{
    await getallbook(req , res)
});
/**
 * @swagger
 * /api/book/getallbook:
 *   get:
 *     summary: Get all Books.
 *     tags:
 *       - Book Table
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: "x-auth-token"
 *         in: "header"
 *         required: true
 *         description: Enter a user Token in the format 'Bearer [token]'
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 */

/*
* @url : http://localhost:8000/api/book/Searchbybook/bookname
  @method : get
*/
bookRouter.get('/Searchbybook/:bookname',tokenVeryfy,async(req , res)=>{
    await searchByBook(req , res)
});
/**
 * @swagger
 * /api/book/Searchbybook/{bookname}:
 *   get:
 *     summary: Search for a book by name.
 *     tags:
 *       - Book Table
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: "x-auth-token"
 *         in: "header"
 *         required: true
 *         description: Enter a user Token in the format 'Bearer [token]'
 *         schema:
 *           type: string
 *       - name: bookname
 *         in: path
 *         required: true
 *         description: Name of the book to search for.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Book found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       '404':
 *         description: Book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: null
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 */


/*
* @url : http://localhost:8000/api/book/singlebook/:bookId
  @method : post
*/
bookRouter.get('/singlebook/:bookId',tokenVeryfy,async(req , res)=>{
    await singlebook(req , res)
});
module.exports = bookRouter