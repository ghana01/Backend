import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import { v2 as cloudinary } from 'cloudinary';



    // Configuration
cloudinary.config({ 
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
     api_key: process.env.CLOUDINARY_API_KEY, 
     api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary=async (localFilePath) =>{
        try{
            if(!localFilePath) return null;
            //upload the file on clodinary
            const response=await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            //file has been uploded successfully
            console.log("file is uplodede on clodinary",response.url);
            return response;
        }catch(error){
            fs.unlinkSync(localFilePath)
            // remove the locally saved temporary files as the upolad operation failed
            return null;
        }
    }
    export {uploadOnCloudinary}
   