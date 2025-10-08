import Joi from "joi";
import { validationMessages } from "../utils/validationMessages/validationMessages.js";

// type interface

type AdminRegister = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: string;
};

// admin login

type LoginInput = {
  email: string;
  password: string;
};

export class AdminValidation {
  // register admin

  static registerAdmin: Joi.ObjectSchema<AdminRegister> = Joi.object({
    firstname: Joi.string().required().min(3).max(50).trim().messages({
      "any.required": validationMessages.firstname["any.required"],
      "string.empty": validationMessages.firstname["string.empty"],
      "string.min": validationMessages.firstname["string.min"],
      "string.max": validationMessages.firstname["string.max"],
    }),
    lastname: Joi.string().required().min(3).max(50).trim().messages({
      "any.required": validationMessages.lastname["any.required"],
      "string.empty": validationMessages.lastname["string.empty"],
      "string.min": validationMessages.lastname["string.min"],
      "String.max": validationMessages.lastname["string.max"],
    }),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .required()
      .trim()
      .messages({
        "any.required": validationMessages.email["any.required"],
        "string.empty": validationMessages.email["string.empty"],
        "string.email": validationMessages.email["string.email"],
      }),
    password: Joi.string()
      .trim()
      .required()
      .min(8)
      .max(30)
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$"
        )
      )
      .messages({
        "any.required": validationMessages.password["any.required"],
        "string.empty": validationMessages.password["string.empty"],
        "string.min": validationMessages.password["string.min"],
        "string.max": validationMessages.password["string.max"],
        "string.base.pattern":
          validationMessages.password["string.pattern.base"],
      }),
    phoneNumber: Joi.string().required().min(8).max(15).trim().messages({
      "any.required": validationMessages.phoneNumber["any.required"],
      "string.empty": validationMessages.phoneNumber["string.empty"],
      "string.min": validationMessages.phoneNumber["string.min"],
      "string.max": validationMessages.phoneNumber["string.max"],
    }),
  });

  // login validation

  static AdminLogin: Joi.ObjectSchema<LoginInput> = Joi.object({
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
