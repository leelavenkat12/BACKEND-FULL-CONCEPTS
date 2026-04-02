const path = require("path")
const fs = require("fs");
const { error } = require("console");
const filename = "fspromises.txt";
const filePath = path.join(__dirname,filename);
console.log(filePath)

// const file = __dirname;
// fs.promises
// .readdir(file)
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((err)=>{
//     console.error(err)
// })




// this is to create file and write the data  inside if present overwirte it

// fs.promises.writeFile(filePath,'this is the intial data','utf-8')
// .then(console.log("File created succesfully"))
// .catch((err)=>{
//     console.error(err);
    
// })

// we are reading the content in the file what is there

fs.promises.readFile(filePath,'utf-8')
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>console.error(err))



fs.promises.appendFile(filePath,"this is a updateeed data","utf-8")
.then(console.log("File upadted Successfully")
)
.catch((err)=>{
    console.error(err);
    
})
fs.promises.unlink(filePath)
.then(console.log("File deleted succesfully")
)
.catch((err)=>{
    console.log(err)
});