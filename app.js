const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRouter = require('./Routers/UserRouter')
const bookRouter = require('./Routers/bookRouter')
const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info:{
            title: 'Contact Book',
            version :'1.0.0'
        }
    },
    apis: ['swagger/swagger.js'],
};
const swaggerDocs = swaggerJsDocs(swaggerOptions)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// mongodb database connection
require('./connections/mongdb')

//config required
app.use(express.json())
dotenv.config({
    path : "./.env"
});

//port
const port = process.env.PORT || 3001
const hostname = process.env.HOST 

//home page get request
app.get('/',(req , res)=>{
    res.status(200).json({
        msg :'Welcome To Home Page'});
});

//Router config
app.use('/api/user',userRouter);
app.use('/api/book',bookRouter);
// listening port
app.listen(port,()=>{
    console.log(`listening on URL At http://${hostname}:${port}/api-docs`);
})