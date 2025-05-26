require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/book.route');
const morgan = require('morgan');
const app = express();
require("./swagger")(app);


app.use(express.json());
app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("Welcome to Book Store Service");
})

app.use('/api/v1/books',bookRoutes)


app.listen(process.env.PORT,async()=>{
    await connectDB();
    console.log(`Server is running on port https://localhost:${process.env.PORT}`);
})