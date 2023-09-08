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
/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     tags: 
 *       - User Table  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User registered successfully
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
 *         description: User already registered
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
* @url : http://localhost:8000/api/user/login
  @method : post
*/

userRouter.post('/login',[
    body('email').not().isEmpty().withMessage('email is required'), 
    body('password').not().isEmpty().withMessage('password is required'), 
],async(req , res)=>{
    await loginUser(req , res)
});
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login a new user
 *     tags: 
 *       - User Table  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User Login successfully
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
 *
 *       '401':
 *         description: Error Unauthorized
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
* @url : http://localhost:8000/api/user/me
  @method : get
*/

/**
 * @swagger
 * /api/user/me:
 *   get:
 *     summary: Get user data.
 *     tags: 
 *       - User Table  
 *     description: Retrieves the user's data.
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
 *     responses:
 *       200:
 *         description: Successful response with user data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized - Invalid token or no token provided.
 *       403:
 *         description: Forbidden - Invalid user request or user not found.
 *       500:
 *         description: Internal Server Error.
 */
userRouter.get('/me',tokenVeryfy,async(req , res)=>{
  await getuserdata(req,res)
})

module.exports= userRouter