// export default interface Post {
//   id?:number;
//   postTitle:string;
//   postDescription:string;
//   postDate?:Date;
//   isPublic:boolean;
//   userId:number;
// }

import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import Post from '../interface/Post';

export default class Posts {
  static schema = z.object({
    id: z.number().optional(),
    postTitle: z.string().min(6),
    postDescription: z.string().min(20),
    isPublic: z.boolean(),
    userId: z.number(),
    postPicture: z.string().optional(),
  });

  private postTitle:string;

  private postDescription:string ;

  private isPublic:boolean;

  private userId:number;

  private postPicture:string | undefined;

  constructor(obj:Post) {
    const result = Posts.schema.safeParse(obj);
    console.log(result);
    if (!result.success) {
      const issues = fromZodError(result.error);
      throw new Error(issues.message);
    }
    this.postTitle = obj.postTitle;
    this.postPicture = obj.postPicture;
    this.userId = obj.userId;
    this.isPublic = obj.isPublic;
    this.postDescription = obj.postDescription;
  }

  getUser() {
    return {
      postTitle: this.postTitle,
      postPicture: this.postPicture,
      userId: this.userId,
      isPublic: this.isPublic,
      postDescription: this.postDescription,
    };
  }
}