import { type Response } from "express";

export class ResponseHandler {

    // when everything works correctly
  static success(res: Response, message: string, data?: any) {
    return res.status(200).json({status: "success",message: message,data: data || null,
    });
  }
//   when you create something new
  static created(res: Response, message: string, data?: any) {
    return res.status(201).json({status: "success",message: message,data: data || null,
    });
  }
// when something doesnt exists  
  static notFound(res: Response, message: string, data?: any) {
    return res.status(404).json({status: "error",message: message,data: data || null,
    });
  }
// when user sends wrong/invalid data
  static validationError(res: Response, message: string, data?: any) {
    return res.status(400).json({status: "error",message: message,data: data || null,
    });
  }
//  when user is not logged in 
  static unauthorized(res: Response, message: string, data?: any) {
    return res.status(401).json({ status: "error", message: message, data: data || null });
  }
//   when user is logged in but doesnt have permission
  static forbidden(res: Response, message: string, data?: any) {
    return res.status(403).json({ status: "error", message: message, data: data || null });
  }
//   when something breakes on the server
  static serverError(res: Response, message: string, data?: any) {
    return res.status(500).json({ status: "error", message: message, data: data || null });
  }
}
