const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/connectDB');
const path = require('path');

connectDB();
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/users',require('./routes/userRoute'));

app.use('/api/v1/transactions',require('./routes/transactionRoutes'));

app.use(express.static(path.join(__dirname, "./client/built")))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})