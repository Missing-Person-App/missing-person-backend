import mongoose,{Schema,Document} from "mongoose";

export interface IAdmin extends Document {
    firstname : string,
    lastname : string,
    email : string,
    password: string,
    phoneNumber : string,
    verificationToken? : string,
    isVerified : boolean,
    resetPasswordToken? : string,
    resetPasswordExpires? : Date,
    role: string
}

const adminSchema : Schema = new mongoose.Schema({

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
        type: Boolean,
        default : true
    },
    resetPasswordToken:{
        type : String,
        default: null
    },
    resetPasswordExpires:{
        type : Date,
        default: null
    },
    role:{
        type:String,
        default : "admin"
    }
},
{timestamps:true})

const adminModel = mongoose.model<IAdmin>("Admin", adminSchema)

export default adminModel;