import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../config/config.js"

// JWT payload type
// type JwtPayload = {
//     _id:string,
//     email : string,
//     role?: string
// }

export class Guards {

   static hashPassword = (password : string) =>{
        return bcrypt.hashSync(password,10)
    }

    static comparePassword = (password:string, hashPassword: string)=>{
        return bcrypt.compareSync(password,hashPassword)
    }

static createJwt (user:any){
    const token = jwt.sign(
        {
            id:user._id,
            email: user.email,
            role: user.role
        },
        config.secret,
        {expiresIn:"1d"}
    )
    return token
}
}