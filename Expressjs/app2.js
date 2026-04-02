import express from "express"
import path from "path"
import { PORT } from "./env.js";
const app = express();
const staticpath = path.join(import.meta.dirname,"public2")
app.use(express.static(staticpath))

// this is dynamic as we can get params 
// req.params is an object that contains route parameters (the parts of the URL that start with :).

app.get("/product",(req,res)=>{

console.log(req.query);
res.send(`<h1> My user Search for product  ${req.query.page} ${req.query.limit}mobiles</h1>`);

})
app.get("/profile/:username/article/:slug",(req,res)=>{

console.log(req.params);
res.send(`<h1> Article ${req.params.username} by ${req.params.slug}`);

})


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${3000}`);
    
})