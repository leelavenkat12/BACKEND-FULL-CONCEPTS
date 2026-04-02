const EventEmitter = require("events")

const eventloops = {
    "user-login":0,
    "user-purchase":0,
    "profile-update":0,

}
const emitter = new EventEmitter();
emitter.addListener("user-login",(username)=>{
    eventloops["user-login"]++;
    console.log(`${username} Login Successfully`);
})
emitter.emit("user-login","leela venkat")

emitter.addListener("user-purchase",(username,item)=>{
    eventloops["user-purchase"]++;
    console.log(`${username} had purchased ${item} Successfully`);
    
})
emitter.emit("user-purchase","Leela venkat","Laptop(ASUS VIVO BOOK)")

emitter.addListener("profile-update",(username,prof)=>{
    eventloops["profile-update"]++;
console.log(`${username} had updated ${prof} Successfully`);


})
emitter.emit("profile-update","Leela venkat","Email")


emitter.addListener("summary",()=>{
    console.log(eventloops);
    
})
emitter.emit("summary")

// how to increase the count if evry timeit ounts the function how to do
