import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document {
    firstname : string,
    lastname : string,
    email : string,
    password: string,
    phoneNumber : string,
    verificationToken? : string,
    isVerified : boolean,
    resetPasswordToken? : string,
    resetPasswordExpires? : Date
}

const userSchema : Schema = new mongoose.Schema({

    firstname:{
        type : String,
        required:[true,"Enter firstname"]
    },
    lastname: {
        type : String,
        required : [true,"Enter lastname" ]
    },
    email:{
        type: String,
        required: [true," Enter email"],
        unique: true
    },
    password:{
        type: String,
        required:[true, "Enter Password"]
    },
    phoneNumber: {
        type: String,
        required: [ true,"Enter phone_number"]
    },
    verificationToken:{
        type: String,
    },
    isVerified: {
        type: String
    },
    resetPaswwordToken:{
        type : String,
        default: null
    },
    resetPasswordExpires:{
        type : Date,
        default: null
    }
},
{timestamps:true})

const userModel = mongoose.model<IUser>("User", userSchema)

export default userModel;