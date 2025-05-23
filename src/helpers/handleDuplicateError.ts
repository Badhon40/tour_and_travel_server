import { Response } from "express"
import { StatusCodes } from "http-status-codes"

export const handleDuplicateError = (err : any, res : Response) => {
    res.status(StatusCodes.CONFLICT).json({
        success : false,
        message: `Duplicate value for ${err.errorResponse.errmsg}`,
        error: err
    })
}