import { BaseModel } from "./base";

export class UserModel extends BaseModel {
  username!: string;
  nickname!: string;
  description?: string;
  avatar?: string;
  password!: string;
  email?: string;
  url?: string;
  lastLoginTime?: Date;
  lastLoginIp?: string;
  socialIds?: any;
}
