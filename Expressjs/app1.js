import express from "express"
import { PORT } from "./env.js";
import path from "path"

const app = express();
// this helps to serve file in backend as connection 
const Staticpage = path.join(import.meta.dirname,"public2")

app.use(express.static(Staticpage));




// we can use await without async

// as if u want to access any file or dir or path of it we cant access like __filename , __dirname

console.log("home page",import.meta.dirname);
console.log("File page",import.meta.filename);



const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json=await responce.json()
console.log(json);





app.get("/",(req,res)=>{
    // as this is saying that if u want in which this file is there then or directory as pwd is present the import meta url
    // as filename we created a new instance as in that we have done we dont want that file as coming so
    // console.log(import.meta.url);
    // const __filename = new URL(import.meta.url).pathname
    // console.log(__filename);
    // if u want to connect the html and css to the backend we can connect by path.join() method 
    //as res.send is not then res.sendfile is that process
     const HomePagePath = path.join(import.meta.dirname,"public2","index1.html")
 
    
    res.sendFile(HomePagePath);
})

app.listen(PORT,()=>{
    console.log(`Server is running at :${PORT}`);
    
})
