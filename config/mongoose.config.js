import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";



const url=process.env.DB_URL || "mongodb+srv://clouduser:ltd2233@cluster0.lqs0kjp.mongodb.net/?retryWrites=true&w=majority";

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