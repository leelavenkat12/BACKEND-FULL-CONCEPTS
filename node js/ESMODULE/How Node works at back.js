import fs from "fs"
console.log("Start");
const data = fs.readFileSync("file.txt","utf-8")
console.log("Sync",data);
 
fs.readFile("file.txt","utf-8",(err,data)=>{
if(err){
    throw err;
}
console.log(data);

})
console.log("End");
// v8 is for sync
// libuv is for async it is a c library