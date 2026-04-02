//  export const PORT = isNaN(process.env.PORT) ? 3000:parseInt(process.env.PORT);
import {z, ZodError} from "zod"
// const ageSchema=z.number().min(18).max(100).int()
// const usserAge = 18;
// try {
//     const ParseData=ageSchema.parse(usserAge)
//     console.log(ParseData);
    
// } catch (error) {
//     // instanceof is a javascript operator used to check if an object is an instance of specific calss or constructor
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message); //this will print only the erro message only  
//     }else{
//         console.log("Unexpected Error",error);
        
//     }
// }
// // as we can validation of enivorment but in parse if any number in string we can covert to int

// // // ZodError: [
// //   {
// //     "origin": "number",
// //     "code": "too_small",
// //     "minimum": 18,
// //     "inclusive": true,
// //     "path": [],
// //     "message": "Too small: expected number to be >=18"
// //   }
// // ]

// coerce is as port if any format string convert to int


const PORTSchema = z.coerce.number().min(1).max(65535).default(3000);
 export const PORT = PORTSchema.parse(process.env.PORT)