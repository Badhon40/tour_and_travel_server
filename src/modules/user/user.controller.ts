// to manage req and res

import userService from "./user.service";
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";





const createUser =catchAsync(
    async (req,res)=>{
            const payLoad = req.body
    
            const result =await userService.createUser(payLoad)
    
            sendResponse(res,{status: true,statusCode: StatusCodes.CREATED,message: "User created", data: result});  
            // res.json({
            //     status: true,
            //     message: "User created",
            //     data : result
            // })
        }
       
) 


   const getUsers = catchAsync(async (req,res)=>{
     
        const result =await userService.getUsers()

        sendResponse(res,{status: true, statusCode: StatusCodes.ACCEPTED,message: "All Users", data: result}); 
   }
    
   
 )

   const getSingleUser =catchAsync(async (req,res)=>{
    const id = req.params.id

        const result =await userService.getSingleUser(id)

        sendResponse(res,{status: true, statusCode: StatusCodes.ACCEPTED,message: "Single User", data: result}); 
   }
)

 const updateUser =catchAsync(async (req,res)=>{    

    const id = req.params.id
    const payLoad = req.body

        const result =await userService.updateUser(id,payLoad)

        sendResponse(res,{status: true, statusCode: StatusCodes.ACCEPTED,message: "User updated", data: result}); 
   }
)
   const deleteUser =catchAsync(async (req,res)=>{      

    const id = req.params.id

        const result =await userService.deleteUser(id)

        sendResponse(res,{status: true, statusCode: StatusCodes.ACCEPTED,message: "User deleted", data: result}); 
   }
)


export const userController = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
}