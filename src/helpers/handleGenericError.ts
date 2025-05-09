import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const handleGenericError =(err : any, res: Response)=>{
    res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: err.message,
        error: err
    })
}