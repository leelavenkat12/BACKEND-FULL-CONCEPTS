import express from "express"
import path from "path"
import { PORT } from "./env.js";
const app = express();

const staticpage = path.join(import.meta.dirname,"public3");
app.use(express.static(staticpage))
// app.get("/contact",(req,res)=>{
//     console.log(req.query);
//     res.redirect("/")
//     // this method mostly we wont use bcoz we will type the form it will show above as login password will show here
//     // and here long string will be and privacy wont be
    
// })
app.use(express.urlencoded())
app.post("/contact",(req,res)=>{
    console.log(req.body);
    res.redirect("/")
    // as we do this the form will get submitted but it wont gett anything in cti so we use middleware to gt teh body message
})

app.use((req,res)=>{
    // this is just we will get the message only no redirect one
// return res.status(404).send("<h1>Page not Found</h1>")
return res.status(404).sendFile(path.join(import.meta.dirname,"views","404page.html"))
})

app.listen(PORT,()=>{
    console.log(`server is running Succesful  http://localhost:${PORT}`);
    
})