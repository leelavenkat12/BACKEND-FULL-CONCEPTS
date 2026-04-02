const fs = require("fs/promises");
const path = require("path");
const filename = "AsyncPromise.txt"
const filepath = path.join(__dirname,filename)


 const file = __dirname;
// fs.readdir(file)
// .then((data)=>{
//     console.log(data)})
// .catch((err)=>console.error(err))

// const readfolder = async()=>{
// try {
//    const res =await fs.readdir(file)
//    console.log(res);
   
// } catch (error) {
//     console.error(error);
    
// }
// }
// readfolder();



const writefile =async ()=>{
try {
    await fs.writeFile(filepath,"This is done by async operations","utf-8");
    console.log("File created Succesfilly");
    
    
} catch (error) {
    console.error(error);
    
}
}

writefile();