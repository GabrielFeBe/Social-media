import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { IUser } from '../interface/Tuser';

export default class User {
  static schema = z.object({
    id: z.number().optional(),
    email: z.string().email().min(5),
    password: z.string().min(6),
    name: z.string().min(6),
    description: z.string().min(200),
    profilePicture: z.string(),
    local: z.string(),
  });

  private email:string;

  private password:string;

  private name:string;

  private description:string;

  private profilePicture:string;

  private local:string;

  constructor(obj:IUser) {
    const result = User.schema.safeParse(obj);
  
    if (!result.success) {
      const issues = fromZodError(result.error);
      throw new Error(issues.message);
    }
    this.description = obj.description;
    this.password = obj.password;
    this.email = obj.email;
    this.local = obj.local;
    this.name = obj.name;
    this.profilePicture = obj.profilePicture;
  }

  getUser() {
    return {
      description: this.description,
      password: this.password,
      email: this.email,
      local: this.local,
      name: this.name,
      profilePicture: this.profilePicture,
    };
  }
}

// export interface IUser {
//   id?: number;
//   email: string;
//   password: string;
//   name: string;
//   description:string;
//   profilePicture:string;
//   local:string;
//   requested?:Requester[];
//   requester?:Requester[];
//   friends?:Requester[];
// }