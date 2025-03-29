import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";


const userSchema = new Schema<IUser>({
    name : {
        type : String,
        required : true,

    },
    age :{
        type : Number,
        required: true
    },
    email :{
        type : String,
        required : true
    },
    photo : String,
    role : {
        type : String,
        enum :["user", "admin"],
        required : true,
        default : "user"
    },
    status :{
        type : String,
        enum : ["active", "inactive"],
        requried: true,
        default : "active"
    }
})

// hook

// userSchema.pre("find",function(this, next){
//     this.find({status : {$eq : "active"}}).then()
// })

// userSchema.post("find",function(docs,next){
//     docs.forEach((doc:IUser) => {
//         doc.name = doc.name.toUpperCase()
//     })
//     next()
// })

const User = model<IUser>("User", userSchema)

export default User