export const validationMessages = {
  firstname: {
    "any.required": "Please enter firstname",
    "string.empty": "Firstname cannot be empty",
    "string.min": "Firstname must be at least 3 characters long",
    "string.max": "Firstname cannot exceed 50 characters",
  },
  lastname: {
    "any.required": "Please enter lastname",
    "string.empty": "Lastname cannot be empty",
    "string.min": "Lastname must be at least 3 characters long",
    "string.max": "Lastname cannot exceed 50 characters",
  },
  email: {
    "any.required": "Please enter email",
    "string.empty": "Email cannot be empty",
    "string.email": "Please enter a valid email address",
  },
  password: {
    "any.required": "Please enter a password",
    "string.empty": "Password cannot be empty",
    "string.min": "Password must be at least 8 characters long",
    "string.max": "Password cannot exceed 30 characters",
    "string.pattern.base":
      "Password must include uppercase, lowercase, number, and special character",
  },
  phoneNumber: {
    "any.required": "Please enter a phone number",
    "string.empty": "Phone number cannot be empty",
    "string.min": "Phone number must be at least 7 characters long",
    "string.max": "Phone number cannot exceed 15 characters",
  },
};
