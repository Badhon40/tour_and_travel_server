import { Response } from "express";

export const handleValidationError =( err: any, res : Response)=>{
    const issues = Object.values(err.errors).map((issue : any)=> {
       return {
        path : issue.path,
        message: issue.message,
        value: issue.value
       }
    })

    res.status(400).json({
        success : false,
        message : err.message,
        issues : issues,
        error: err
    })
    
}