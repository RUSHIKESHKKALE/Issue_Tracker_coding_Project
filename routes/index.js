import  express  from "express";
import home_controller from "../controllers/home_controller.js";
//import ProjectRouter from "./project.js";
const router= express.Router();

console.log("router is loaded");

router.get("/",home_controller.home);

//router.use("/project",ProjectRouter);

export default router;