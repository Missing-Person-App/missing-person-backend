import { ResponseHandler } from "../../utils/responseHandlers.js";
import { UserService } from "../../services/userService/user.service.js";
import { type Request, type Response } from "express";

const userService = new UserService();

// register user
export class UserController {
  // register user
  async registerUser(req: Request, res: Response) {
    try {
      const { error, data } = await userService.createUser(req.body);
      if (error) {
        return ResponseHandler.validationError(
          res,
          "Error creating account, please try again",
          null
        );
      }
      if (!data) {
        return ResponseHandler.validationError(
          res,
          "Invalid data,please check and try again",
          null
        );
      }
      return ResponseHandler.created(
        res,
        "Your account was created successfully",
        data
      );
    } catch (error: any) {
      return ResponseHandler.serverError(res, "Something went wrong", null);
    }
  }

  //   login user

  async loginUser(req: Request, res: Response) {
    try {
      // check if email and password is typed in
      const { email, password } = req.body;
      if (!email || !password) {
        return ResponseHandler.validationError(
          res,
          "Email and password required",
          null
        );
      }

      const { error, data } = await userService.userLogin(email, password);
      if (error) {
        return ResponseHandler.success(res, "Error Logging in", null);
      }
      return ResponseHandler.success(res, "Login successfull", data);
    } catch (error: any) {
      return ResponseHandler.serverError(res, "Something went wrong", null);
    }
  }
}
