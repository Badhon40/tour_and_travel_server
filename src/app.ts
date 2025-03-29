import express, { Request, Response } from 'express'
import userRouter from './modules/user/user.router'
import { NextFunction } from 'express';
import tourRouter from './modules/tour/tour.router';
import bookingRouter from './modules/booking/booking.router';


const app=express()

app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/tour", tourRouter)
app.use("/api/booking", bookingRouter)

app.get("/",(req : Request,res: Response)=>{
    res.send({
        status : true,
        message: `Server Live`
       
    })
})

app.use((err : any,req: Request, res: Response, next: NextFunction) => {
    
    res.status(500).json({
        status: false,  
        message: err.message,
        error: err
    })
})


export default app;