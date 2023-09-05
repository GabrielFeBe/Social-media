"use strict";
// export default interface Post {
//   id?:number;
//   postTitle:string;
//   postDescription:string;
//   postDate?:Date;
//   isPublic:boolean;
//   userId:number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
class Posts {
    constructor(obj) {
        const result = Posts.schema.safeParse(obj);
        // console.log(result);
        // if (!result.success) {
        //   const issues = fromZodError(result.error);
        //   throw new Error(issues.message);
        // }
        this.postTitle = obj.postTitle;
        this.postPicture = obj.postPicture;
        this.userId = obj.userId;
        this.isPublic = obj.isPublic;
        this.postDescription = obj.postDescription;
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
exports.default = Posts;
Posts.schema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    postTitle: zod_1.z.string().min(6),
    postDescription: zod_1.z.string().min(20),
    isPublic: zod_1.z.boolean(),
    userId: zod_1.z.number(),
    postPicture: zod_1.z.string().optional(),
});
//# sourceMappingURL=Post.js.map