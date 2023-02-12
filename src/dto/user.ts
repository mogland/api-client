import { BeAnObject } from "../types/typegoose";

class UserOptionDto {
  nickname?: string;
  readonly description?: string;
  readonly email?: string;
  readonly url?: string;
  readonly avatar?: string;
  readonly socialIds?: BeAnObject;
}

export class UserDto extends UserOptionDto {
  readonly username!: string;
  readonly password!: string;
}

export class LoginDto {
  username!: string;
  password!: string;
}

export class UserPatchDto extends UserOptionDto {
  readonly username!: string;
  readonly password!: string;
}
