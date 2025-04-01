import { NextFunction, Request, Response, Router } from "express";
import { userController } from './user.controller';
import { userValidation } from "./userValidation";


const userRouter = Router()

userRouter.post('/create_user',async (req : Request , res : Response, next : NextFunction )=>{
    try{
      await userValidation.userValidationSchema.parseAsync(req.body)

        next()
    }
    catch(err){
        next(err)
    }
},userController.createUser)
userRouter.get('/:id',userController.getSingleUser)
userRouter.patch('/:id',userController.updateUser)
userRouter.delete('/:id',userController.deleteUser)
userRouter.get('/',userController.getUsers)

export default userRouter
