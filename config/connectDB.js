const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async ()=>{
    try {
        const MONGO_URL = 'mongodb+srv://aditya1137be20:RAYrnjn6r2c55dgC@cluster0.wbwl9u0.mongodb.net/Expanse_Management';
        await mongoose.connect(MONGO_URL);
        console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

module.exports = connectDB;