export default interface Post {
  id?:number;
  postTitle:string;
  postDescription:string;
  postDate?:Date;
  isPublic:boolean
}