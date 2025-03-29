import { Response } from "express";

type TResponse<T> = {
    status: boolean; 
    statusCode :number;   
    message: string;
    data: T| T[] | null;
}



const sendResponse =<T>(res : Response, data : TResponse<T>)=>{
    res.status(data.statusCode).json({
        status: data.status,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data,
    });
}


export default sendResponse;