import userModel, { type IUser } from "../../models/userModel/userSchema.js";
import { Guards } from "../../guards/guards.js";
import crypto from "crypto";
// import { error } from "console";

type LoginData = {
  email: string;
  password: string;
};

export class UserService {
  async createUser(userData: IUser) {
    try {
      const existingUser = await userModel.findOne({ email: userData.email });

      // find existing user
      if (existingUser) {
        return { error: "User already exists", data: null };
      }

      // hash password
      const hashedPassword = Guards.hashPassword(userData.password);

      // generate verification token

      const verificationToken = crypto.randomBytes(32).toString("hex");

      // create new user

      const newUser = new userModel({
        ...userData,
        password: hashedPassword,
        verificationToken,
        isVerified: false,
      });

      // save new user created
      const savedUser = await newUser.save();

      // send verifcation email
      try {
        // sendverifcation email
      } catch (error) {
        return { error: "sending verifcation mail failed", data: null };
      }

      return {
        error: null,
        data: "registration complete, check your mail to verify your account",
      };
    } catch (error: any) {
      return { error: error.message, data: null };
    }
  }

  // user login
  async userLogin(userData: LoginData, password: any) {
    try {
      const user = await userModel.findOne({ email: userData.email });

      // find user
      if (!user) {
        return { error: "Invalid email or password", data: null };
      }

      // is user verified

      if (!user.isVerified) {
        return { error: "Your account is not verified yet", data: null };
      }
      // is password match

      const isPasswordMatch = Guards.comparePassword(
        userData.password,
        user.password
      );
      if (!isPasswordMatch) {
        return { error: "Invalid email or password", data: null };
      }

      // create jwt

      const token = Guards.createJwt({
        _id: user.id.toString(),
        email: user.email,
      });

      return { error: null, data: `Login successful ${token}` };
    } 
    catch (error: any) {
      return { error: error.message, data: null };
    }
  }

}
