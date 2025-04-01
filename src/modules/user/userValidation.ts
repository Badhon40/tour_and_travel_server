import { z } from "zod";

const userValidationSchema= z.object({
   name: z.string({
    required_error : "Name is required"
   }).min(3).max(20).trim(),
   age : z.number({
    required_error :"Age is required"
   }).int().positive(),
   email : z.string({
    required_error : " Email is required"
   }).email(),
   photo : z.string().optional(),



})

export const userValidation ={
    userValidationSchema
}