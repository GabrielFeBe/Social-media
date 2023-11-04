import { object, string, number, boolean, ValidationError } from 'yup';
import Post from '../interface/Post';

export default class Posts {
  static schema = object({
    id: number().optional(),
    postTitle: string().required().min(5),
    postDescription: string().required().min(5),
    isPublic: boolean().required(),
    userId: number().required(),
    postPicture: string().optional(),
  });

  private postTitle:string;

  private postDescription:string ;

  private isPublic:boolean;

  private userId:number;

  private postPicture:string | undefined;

  constructor(obj:Post) {
    this.postTitle = obj.postTitle;
    this.postPicture = obj.postPicture;
    this.userId = obj.userId;
    this.isPublic = obj.isPublic;
    this.postDescription = obj.postDescription;
  }

  public static async validate(obj:Post) {
    try {
      await Posts.schema.validate(obj, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationErrors = error.errors;
        throw new Error(`Validation Error : ${validationErrors.join(', ')}`);
      } else {
        throw new Error('Unknown Error');
      }
    }
  }

  getPost() {
    return {
      postTitle: this.postTitle,
      postPicture: this.postPicture,
      userId: this.userId,
      isPublic: this.isPublic,
      postDescription: this.postDescription,
    };
  }
}