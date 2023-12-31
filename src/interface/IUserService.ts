import { IUser } from './Tuser';

export default interface IUserService{
  getUserId(id:number): Promise<IUser | null>
  createUser(user:IUser): Promise<IUser>
  deleteUserId(id:number): Promise<number>
  getAllUser(): Promise<IUser[]>
  getAllUserByName(name:string):Promise<IUser[]>
  loginUser(email:string, password:string):Promise<string>
  createUserNotification(userId:number):Promise<boolean>
  deleteUserNotification(userId:number):Promise<number>
  update(id:number, data:Partial<IUser>):Promise<IUser | null >
}