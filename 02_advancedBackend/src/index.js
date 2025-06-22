import dotenv from 'dotenv'

dotenv.config({path:'./env'})

import connectDB from "./db/index.js";
connectDB()





// import express from 'express'
// const app = express();
// // function connectDB(){} ,connectDB() --> use this or use EEFI
// ;(async()=>{
//   try{
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error",()=>{
//       console.log("my application is not talking",error);
//       throw err 
//     })
//     app.listen(process.env.PORT,()=>{
//       console.log(`App is listening on port ${process.env.PORT}`);
      
//     })
//   } catch(error){
//     console.log("error",error);
//     throw err
    
//   }
// })()  

