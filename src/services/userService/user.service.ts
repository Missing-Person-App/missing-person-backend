import userModel from "../../models/userModel/userSchema.js";
import type {IUser} from "../../models/userModel/userSchema.js"
import { Guards } from "../../guards/guards.js";
import crypto from "crypto"

export class UserService {
  // create new user

  async createUser(userData: IUser) {
    try {
        const existingUser = await userModel.findOne({email : userData.email})

        if(existingUser){
            console.log("email already exists");
        }

        // hashing pasword before saving
        const password =  Guards.hashPassword(userData.password)

        // generate verification token

        const verificationToken = crypto.randomBytes(32).toString("hex")

        // creating a new user 

        const newUser = new userModel({
            ...userData,
            password,
            verificationToken,
            isVerified: false
        })

        const savedUser = await newUser.save()

        try{
            // send verification mail
            
        }

        catch(emailError){
            console.log("failed to send verification email");
            
        }

    } catch (error: any) {

    }
  }
}
