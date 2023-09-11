const express = require('express')
const { body } = require('express-validator')
const {registerUser, loginUser, getuserdata} = require('../controllers/UserController');
const tokenVeryfy = require('../middleware/tokenveryfier');
const userRouter = express.Router()

/*
* @url : http://localhost:8000/api/user/register
  @method : post
*/

userRouter.post('/register',[
  body('username').not().isEmpty().withMessage('username is required'), 
  body('email').not().isEmpty().withMessage('email is required'), 
  body('password').not().isEmpty().withMessage('password is required'), 
],async(req , res)=>{
  await registerUser(req , res)
});
/*
* @url : http://localhost:8000/api/user/login
  @method : post
*/

userRouter.post('/login',[
    body('email').not().isEmpty().withMessage('email is required'), 
    body('password').not().isEmpty().withMessage('password is required'), 
],async(req , res)=>{
    await loginUser(req , res)
});

/*
* @url : http://localhost:8000/api/user/me
  @method : get
*/


userRouter.get('/me',tokenVeryfy,async(req , res)=>{
  await getuserdata(req,res)
})

module.exports= userRouter