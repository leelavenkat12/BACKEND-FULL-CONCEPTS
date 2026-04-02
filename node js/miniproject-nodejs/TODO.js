import { stdout } from "process"
import readline from "readline"
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const TODOS = [];
const showmenu = ()=>{
    console.log("\n 1.Add New Task");
    console.log("2.View Tasks");
    console.log("3.Exit");
    r1.question("Choose one option:",HandleInput);
    
}
const HandleInput = (option)=>{
if(option===1){
    r1.question("Enter the task:",(task)=>{
        TODOS.push(task)
        console.log("task added successfully",task);
        showmenu();
    })

}
else if(option===2){
console.log("TODO-Lists:");
TODOS.forEach((task,index)=>{
    console.log(`${index+1}.${task}`);  
    showmenu();  
})

}
else{
    console.log("Thank you");
    
}
}
showmenu();