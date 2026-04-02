import express from "express"
import { PORT } from "./env.js";
const app = express();  //this  is a instance we are created 
// this get method is to get the data what we wrote and res.send we are sending some respocne

app.get("/",(req,res)=>{
    res.send(" <h1>hello day 1 in express js</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>hello day 1 in express js about page </h1>")
})
app.get("/contact",(req,res)=>{
    return res.send(`<div class="container">
        <h1>Url Shortener</h1>
        <form id="shorten-form" >
            <div>
                <label for="url">Enter URL:</label>
                <input type="url" name="url" id="url" required>
            </div>
             <div>
                <label for="shortCode">Enter ShortCode:</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Shorten</button>
        </form>
        <h2>Shortened URL's</h2>
        <ul id="Shortend-urls">

        </ul>
    </div> `)
})

// we are  listeing in localhost 
// const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at port :${PORT}`);
    
})