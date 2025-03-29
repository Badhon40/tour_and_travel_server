import { IUser } from "./user.interface"
import User from "./user.model"

const createUser = async (payload : IUser) : Promise<IUser>=>{
    const result = await User.create(payload)

    return result
}

const getUsers =async ()=>{
    const result = await User.find()

    return result
}

const getSingleUser =async (id : string ) =>{
    const result =await User.findById(id)

    return result
}

const updateUser =async (id : string, payload : IUser) =>{
    const result= await User.findByIdAndUpdate(id,payload,{
        new : true,
        runValidators : true
    })
    return result
}

const deleteUser =async (id : string) =>{
    const result = await User.findByIdAndDelete(id)

    return result
}


const userService = {
    createUser,
    getUsers ,
    getSingleUser,
    updateUser,
    deleteUser

}
export default userService