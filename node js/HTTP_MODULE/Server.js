// this is nodejs server


const http = require("http");
const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.write("I am Leela venkat ");
    res.end();
}
if(req.url==='/home'){
    res.write("I am Leela venkat From Marwadi university ");
    res.end();
}
if(req.url==='/Contact'){
    res.write("8919947737 OR 9704839000");
    res.end();
}
})
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
}); 