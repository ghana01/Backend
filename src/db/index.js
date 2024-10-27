import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";


const connectDB =async () =>{
    try{
    const connectionInstance=await mongoose.connect
        (`${process.env.MANGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected!! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log(" MONGODB connection ERROR :",error);
        process.exit(1)
    }
}

export  default connectDB
