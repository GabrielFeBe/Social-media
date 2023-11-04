import { ValidationError, object, string, number } from 'yup';

import { IUser } from '../interface/Tuser';

export default class User {
  static schema = object({
    id: number().optional(),
    email: string().email().required(),
    password: string().required().min(6),
    name: string().required().min(6),
    description: string().required().min(10),
    profilePicture: string().required().min(5),
    local: string().required().min(5).max(20),
  });

  private email:string;

  private password:string;

  private name:string;

  private description:string;

  private profilePicture:string;

  private local:string;

  constructor(obj:IUser) {
    this.description = obj.description;
    this.password = obj.password;
    this.email = obj.email;
    this.local = obj.local;
    this.name = obj.name;
    this.profilePicture = obj.profilePicture;
  }

  public static async validate(obj:IUser) {
    try {
      await User.schema.validate(obj, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        // const validationErrors = validationError.message;
        const validationErrors = error.errors;
        console.log(error);
        throw new Error(`Validation Error: ${validationErrors.join(', ')}`);
      } else {
        throw new Error('Unknown Error');
      }
    }
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