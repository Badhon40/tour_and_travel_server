import { Response } from "express"

export const handleZodError= (err: any, res: Response) => {
   const issues = err.issues.map((issue : any)=>{
        return {
            path : issue.path.join('.'),
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
