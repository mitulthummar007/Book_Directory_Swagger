// User Register
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
 *                 example: yourname
 *               email:
 *                 type: string
 *                 example: youremail
 *               password:
 *                 type: string
 *                 example: Yourpassword
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               status: SUCCESS
 *               msg: User registered successfully
 *               data:
 *                 username: yourname
 *                 email: youremail@gmail.com
 *                 password: yourpassword
 *
 *       403:
 *         description: User already registered 
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: User already registered 
 *               data: Null
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: Internal Server Error
 *               data: Null
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
 *                 example: youremail@gmail.com
 *               password:
 *                 type: string
 *                 example: Your@123
 *     responses:
 *       200:
 *         description: User Login successfully
 *         content:
 *           application/json:
 *             example:
 *               status: SUCCESS
 *               msg: User Login successfully
 *               data:
 *                 email: youremail@gmail.com
 *                 password: bcrypts
 *       '403':
 *         description: User Not a register
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: User Not a register
 *               data: null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: Internal Server Error
 *               data: null
 *       '401':
 *         description: Error Unauthorized Wrong password
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: Error Unauthorized Wrong password
 *               data: null
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
 *         description: get user data
 *         content:
 *           application/json:
 *             example:
 *               status: SUCCESS
 *               msg: User Login successfully
 *               data:
 *                  _id: 64faa7272189001ae7453eaa,
 *                  username: Test,
 *                  email: test@gmail.com,
 *                  password: bcrypt,
 *                  createdAt: 2023-09-08T04:46:31.113Z,
 *                  updatedAt: 2023-09-08T04:46:31.113Z,
 *                  __v: 0
 *       403:
 *         description: invalid token
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: invalid token
 *               data: null
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: FAILED
 *               msg: Internal server error
 *               data: null
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
 *                 example: bookname
 *               authorname:
 *                 type: string
 *                 example: authorname
 *               bookimg:
 *                 type: string
 *                 example: imgurl 
 *               bookversion:
 *                 type: string
 *                 example: v.0.0.1
 *     responses:
 *       '200':
 *         description: Book added successfully!!!
 *         content:
 *           application/json:
 *             example:
 *               status: SUCCESS
 *               msg: User added successfully
 *               data:
 *                 bookname: thinking,
 *                 authorname: swamivivekanand
 *                 bookimg: urlimg.com,
 *                 bookversion: v.1.1.2.3,
 *                 createdAt: 2023-09-12T13:13:44.240Z,
 *                 updatedAt: 2023-09-12T13:13:44.240Z,
 *       '403':
 *         description: Book already added
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Book already added
 *               data: null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Internal Server Error
 *               data: null
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
 *                 example: updatebookname 
 *               authorname:
 *                 type: string
 *                 example: updateauthorname 
 *               bookimg:
 *                 type: string
 *                 example: updateimg 
 *               bookversion:
 *                 type: string
 *                 example: updatebookversion 
 *     responses:
 *       '200':
 *         description: Book updated successfully!!!
 *         content:
 *           application/json:
 *             example:
 *               status: SUCCESS
 *               msg: User update successfully
 *               data:
 *                 username: rakesh,
 *                 email: rakesh@gmail.com,
 *                 password: bcryptpassword,
 *                 _id: 65006408781e577dcde713b0,
 *                 createdAt: 2023-09-12T13:13:44.240Z,
 *                 updatedAt: 2023-09-12T13:13:44.240Z,
 *       '404':
 *         description: Book not found.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: book not found
 *               data: null
 *       '401':
 *         description: Unauthorized - Invalid token or no token provided.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Unauthorized - Invalid token or no token provided.
 *               data: null
 *       '403':
 *         description: Forbidden - Invalid user request or book not found.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Unauthorized - Invalid user request or book not found.
 *               data: null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Internal Server Error
 *               data: null
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
 *             example:
 *               Status: Success
 *               message: Book delete successfully!!!
 *               data:
 *                 _id: 65006408781e577dcde713b0,
 *                 createdAt: 2023-09-12T13:13:44.240Z,
 *                 updatedAt: 2023-09-12T13:13:44.240Z,
 *       '404':
 *         description: Book not found.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Book not found.
 *               data: null
 *       '401':
 *         description: Unauthorized - Invalid token or no token provided.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Invalid token or no token provided.
 *               data: null
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Internal Server Error
 *               data: null
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
 *             example:
 *               Status: Success
 *               message: all Book get successfully!!!
 *               data:
 *                 bookname: thinking,
 *                 authorname: swamivivekanand
 *                 bookimg: urlimg.com,
 *                 bookversion: v.1.1.2.3,
 *                 createdAt: 2023-09-12T13:13:44.240Z,
 *                 updatedAt: 2023-09-12T13:13:44.240Z,
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
 *         description: Book found by book name.
 *         content:
 *           application/json:
 *             example:
 *               Status: Success
 *               message: awailable Book  
 *               data:  
 *                 _id: exampleid
 *                 bookname: thinking,
 *                 authorname: swamivivekanand
 *                 bookimg: urlimg.com,
 *                 bookversion: v.1.1.2.3,
 *                 createdAt: 2023-09-12T13:13:44.240Z,
 *                 updatedAt: 2023-09-12T13:13:44.240Z,
 
 *       '404':
 *         description: Book not found.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Book not found
 *               data: null
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               Status: FAILED
 *               message: Internal Server Error.
 *               data: null
 */
