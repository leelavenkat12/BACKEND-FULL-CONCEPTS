const EventEmitter = require("events")
const emitter = new EventEmitter();
// emitter.on("greet",()=>{
//     console.log("Hello leela venkat");
    
// });
// emitter.emit("greet");


// u can also pass the argument
emitter.addListener("greet",(username)=>{
console.log(`Hello Mself ${username}` );

})
emitter.emit("greet","Leela venkat")