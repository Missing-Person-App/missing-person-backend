import adminModel, {
  type IAdmin,
} from "../../models/adminModel/adminSchema.js";
import { Guards } from "../../guards/guards.js";
import crypto from "crypto";
import { error } from "console";

type LoginData = {
  email: string;
  password: string;
};

export class AdminService {
  // create admin

  //   async createAdmin(userData: IAdmin) {
  //     // find existing admin
  //     const existingUser = await adminModel.findOne({ email: userData.email });

  //     if (existingUser) {
  //       return { error: "admin already exists", data: null };
  //     }
  //     // hash password
  //     const hashPassword = Guards.hashPassword(userData.password);

  //     // generate verifcation token
  //     const verificationToken = crypto.randomBytes(32).toString("hex");

  //     // create new admin
  //     const newAdmin = new adminModel({
  //       ...userData,
  //       password: hashPassword,
  //       verificationToken,
  //       isVerified: false,
  //     });

  //     // save admin

  //     const savedAdmin = newAdmin.save();

  //     // send verification email
  //     try {
  //       // send mail
  //     } catch (error: any) {

  //     }
  //   }

  //   admim login

  async adminLogin(userData: LoginData) {
    try {
      const user = await adminModel.findOne({ email: userData.email });

      // find admin
      if (!user) {
        return { error: "admin doesn't exist", data: null };
      }

      // check password match
      const isPasswordMatch = Guards.comparePassword(
        userData.password,
        user.password
      );
      if (!isPasswordMatch) {
        return { error: "Invalid password", data: null };
      }

      // create jwt
      const token = Guards.createJwt({
        _id: user.id,
        email: user.email,
        role: user.role,
      });

      return { error: null, data: `admin login successful, ${token}` };
    } catch (error: any) {
      return { error: error.message, data: null };
    }
  }
}
