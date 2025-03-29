import { Router } from "express";
import { userController } from './user.controller';


const userRouter = Router()

userRouter.post('/create_user',userController.createUser)
userRouter.get('/:id',userController.getSingleUser)
userRouter.patch('/:id',userController.updateUser)
userRouter.delete('/:id',userController.deleteUser)
userRouter.get('/',userController.getUsers)

export default userRouter
