export interface User {
  id: string;
  firstname: string;
  lastname: string;
  roles: "editor" | "admin" | "developer";
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
