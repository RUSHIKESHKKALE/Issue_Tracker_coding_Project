import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";



const url=process.env.DB_URL || "mongodb://127.0.0.1:27017/issueTracker";

console.log(url);

const connectToDatabase= async()=>{
    try{
        await  mongoose.connect(url,
        // {
        //     useNewUrlParsal:true,
        //     useUnifiedTopology:true
        // }
        );
        console.log("database is connect successfuly using mongoose");
    }catch(err){
        console.log(err);
        console.Console("failed to connect database");
    }
 
} 

export default connectToDatabase;