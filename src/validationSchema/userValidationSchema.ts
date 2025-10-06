import Joi from "joi";
import { validationMessages } from "../utils/validationMesaages/validationMessages.js";

// type safety for register
type RegisterIput = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: string;
};

// tye safety for login
type LoginInput = {
  email: string;
  password: string;
};

// used a class(OOP) to create my validations

export class UserValidation {
  // register user

  static registerUser: Joi.ObjectSchema<RegisterIput> = Joi.object({
    firstname: Joi.string().trim().min(3).max(50).required().messages({
      "any.required": validationMessages.firstname["any.required"],
      "string.empty": validationMessages.firstname["string.empty"],
      "string.min": validationMessages.firstname["string.min"],
      "string.max": validationMessages.firstname["string.max"],
    }),
    lastname: Joi.string().trim().min(3).max(50).required().messages({
      "any.required": validationMessages.lastname["any.required"],
      "string.empty": validationMessages.lastname["string.empty"],
      "string.min": validationMessages.lastname["string.min"],
      "string.max": validationMessages.lastname["string.max"],
    }),
    email: Joi.string()
      .trim()
      // top level domains.allows all .com .....
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "any.required": validationMessages.email["any.required"],
        "string.empty": validationMessages.email["string.empty"],
        "string.email": validationMessages.email["string.email"],
      }),
    password: Joi.string()
      .trim()
      .min(8)
      .max(30)
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$"
        )
      )
      .required()
      .messages({
        "any.required": validationMessages.password["any.required"],
        "string.empty": validationMessages.password["string.empty"],
        "string.min": validationMessages.password["string.min"],
        "string.max": validationMessages.password["string.max"],
        "string.pattern.base":
          validationMessages.password["string.pattern.base"],
      }),
    phoneNumber: Joi.string().trim().min(8).max(15).required().messages({
      "any.required": validationMessages.phoneNumber["any.required"],
      "string.empty": validationMessages.phoneNumber["string.empty"],
      "string.min": validationMessages.phoneNumber["string.min"],
      "string.max": validationMessages.phoneNumber["string.max"],
    }),
  });

  //   login user

  static loginUser: Joi.ObjectSchema<LoginInput> = Joi.object({
    email: Joi.string().email().required().lowercase().trim().messages({
      "any.required": validationMessages.email["any.required"],
      "string.empty": validationMessages.email["string.empty"],
      "string.email": validationMessages.email["string.email"],
    }),

    password: Joi.string().required().trim().messages({
      "any.required": validationMessages.password["any.required"],
      "string.empty": validationMessages.password["string.empty"],
    }),
  });
}
