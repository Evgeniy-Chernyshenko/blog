export type UserRole = "admin" | "manager" | "user";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles: UserRole[];
}

export interface UserSchema {
  authData: User | null;
  _isInit: boolean;
}
