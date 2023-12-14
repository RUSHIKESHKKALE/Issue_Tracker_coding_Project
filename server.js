import dotenv from "dotenv";
dotenv.config();

import  express  from "express";
import connectToDatabase from "./config/mongoose.config.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
//importing all routes from routes folder
// import router from "../routes/index.js";
 import router from "./routes/index.js";
 import router2 from "./routes/project.js"

//load all the environments variables in our application
const PORT=process.env.PORT || 6000;

const server=express();


//for parse the data comming from user
server.use(express.urlencoded({extended:true}));
// //from setting view engin layouts
server.use(expressEjsLayouts);

// //setting view engin 
 server.set("view engine","ejs");
 server.set("views",path.join(path.resolve(),"views"));

 server.use(express.static("assets"));

 //extract extra styles and script from sub pages into layouts
 server.set("layouts extractStyles",true);
 server.set("layouts extractScripts",true);

//setting routes here
server.use("/",router);
server.use("/project",router2);

server.listen(PORT,()=>{
    console.log(`server start listening on port no ${PORT}`);
    connectToDatabase();
})