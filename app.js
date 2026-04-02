import {createReadStream,createWriteStream} from "fs"
import path from "path"
import { buffer } from "stream/consumers";
const inputfilePath = path.join(import.meta.dirname,"input.txt")
const ouputfilepath = path.join(import.meta.dirname,"output.txt")
const readableStream = createReadStream(inputfilePath,{encoding:"utf-8",highWaterMark:16});
const writeableStream = createWriteStream(ouputfilepath)

readableStream.on("data" , (chunk)=>{
    console.log("buffer (chunk):",Buffer.from(chunk)); //convert the chunk to buffer
    console.log("Recevied chunk:",chunk); //sends 16bytes at a time
    writeableStream.write(chunk) //write the data    
})
readableStream.on("end",()=>{
    console.log("file Read completed");
    writeableStream.end();
    
    })

// readableStream.pipe(writeableStream) // this is to copy the content in file to other file
// handle eros
readableStream.on("error",(err)=>console.log(err))
writeableStream.on("error",(err)=>console.log(err));