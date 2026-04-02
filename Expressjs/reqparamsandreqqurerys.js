import express from "express";
import { PORT } from "./env.js";

const app = express();
app.get("/user/:name",(req,res)=>{
    console.log(req.params.name);
})
app.get("/id",(req,res)=>{
    console.log(req.query.name);
    
})

app.listen(PORT,()=>{
    console.log(`Server is running at localhost:${PORT}`);
    
})