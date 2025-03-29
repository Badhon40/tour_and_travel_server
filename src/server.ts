import app from "./app"
import mongoose from 'mongoose'
import config from "./config"

async function server(){
   try{
    await  mongoose.connect(config.database_url as string)
    app.listen(config.port ,()=>{
        console.log(`server is running on ${config.port}`)
    })
   }
   catch(error){
    console.error(error)
   }
}

server()