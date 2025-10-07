import config from "./config.js";
import mongoose from "mongoose"

export const connectDb = async()=>{
    try{
        await mongoose.connect(config.mongo_url);
        console.log("connection to db successfull");
    }
    catch(error:any){
        console.log("error connecting db",error)

        // this stops the entire app when connection fails
        process.exit(1)
    }
}