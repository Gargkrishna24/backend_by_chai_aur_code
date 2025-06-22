import dotenv from 'dotenv'

dotenv.config({path:'./env'})

import connectDB from "./db/index.js";
connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`);
    
  })
})
.catch((err)=>{
  console.log("MongoDB connection failed !!! ",err);
  
})




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

