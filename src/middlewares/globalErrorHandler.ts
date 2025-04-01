import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { handleGenericError } from "../helpers/handleGenericError";
import { handleDuplicateError } from "../helpers/handleDuplicateError";
import { handleCastError } from "../helpers/handleCastError";
import { handleValidationError } from "../helpers/handleValidationError";
import { handleZodError } from "../helpers/handleZodError";



type TErrorResponse = {
    success : boolean,
    name : string,
    message : string,
    error : any
}

export const globalErrorHandler = (err : TErrorResponse ,req: Request, res: Response, next: NextFunction) => {

    if(err.name && err.name =="zodError"){
       handleZodError(err,res)
    }
  else if(err instanceof mongoose.Error.CastError){
        handleCastError(err, res)
   }
   else if(err instanceof mongoose.Error.ValidationError){
       handleValidationError(err, res)
   }
   else if(err.code && err.code ==11000){
       handleDuplicateError(err,res)
   }
   else if( err instanceof  Error){
       handleGenericError(err,res)
    }
    
    
}
