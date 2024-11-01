//require('dotenv').config({path: '/.env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!",err)
})





























/*
import express from "express";
const app=express();
//  connection MoNGODB direct using function
function connectDB(){}
connectDB() 

// one of the way of connection mangoDB using ifi function


( async ()=>{
    try{
       await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
       app.on("error",(error) =>{
        console.log("ERROR",error);
        throw error;
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.log("ERROR: ",error)
        throw err
    }
})()
*/
