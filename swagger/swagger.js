//User Register//
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
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: User already registered
 *                 data:
 *                   type: string
 *                   example: Null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: Internal Server Error
 *                 data:
 *                   type: string
 *                   example: Null
 */

//Login User
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
 *       '403':
 *         description: User Not a register
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED    
 *                 msg:
 *                   type: string
 *                   example: User Not a register     
 *                 data:
 *                   type: string
 *                   example: Null     
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
 *                 data:
 *                   type: string
 *                   example: Null
 *       '401':
 *         description: Error Unauthorized Wrong password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 msg:
 *                   type: string
 *                   example: Wrong password
 *                 data:
 *                   type: string
 *                   example: Null
 */

//token veryfy and get user
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
 *       403:
 *         description: invalid token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED   
 *                 msg:
 *                   type: string
 *                   example: invalid token
 *                 data:
 *                   type: string
 *                   example: Null
 *       500:
 *         description: Internal Server Error.
 */

//add book
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
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: Book already added
 *                 data:
 *                   type: string
 *                   example: Null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: Internal Server Error
 *                 data:
 *                   type: string
 *                   example: Null
 *          
 */

//update book
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
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: Book not found.
 *                 data:
 *                   type: string
 *                   example: null
 *       '401':
 *         description: Unauthorized - Invalid token or no token provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED. 
 *                 msg:
 *                   type: string
 *                   example: Invalid token or no token provided. 
 *                 data:
 *                   type: string
 *                   example: Null
 *       '403':
 *         description: Forbidden - Invalid user request or book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED. 
 *                 msg:
 *                   type: string
 *                   example: Invalid user request or book not found.
 *                 data:
 *                   type: string
 *                   example: Null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED   
 *                 msg:
 *                   type: string
 *                   example: Internal Server Error   
 *                 data:
 *                   type: string
 *                   example: Null   
 */

//delete book
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
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: Book not found.
 *                 data:
 *                   type: string
 *                   example: null
 *       '401':
 *         description: Unauthorized - Invalid token or no token provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED. 
 *                 msg:
 *                   type: string
 *                   example: Invalid token or no token provided. 
 *                 data:
 *                   type: string
 *                   example: Null
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED   
 *                 msg:
 *                   type: string
 *                   example: Internal Server Error   
 *                 data:
 *                   type: string
 *                   example: Null   
 */

//get all book
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
 *                   example: FAILED   
 *                 msg:
 *                   type: string
 *                   example: Internal Server Error   
 *                 data:
 *                   type: string
 *                   example: Null   
 */

//search by book name
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
 *                   example: FAILED
 *                 msg:
 *                   type: string
 *                   example: Book not found.
 *                 data:
 *                   type: string
 *                   example: null
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED   
 *                 msg:
 *                   type: string
 *                   example: Internal Server Error   
 *                 data:
 *                   type: string
 *                   example: Null   
 */
