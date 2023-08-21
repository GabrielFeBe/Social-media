import { IUser } from './Tuser';

export default interface IUserService{
  getUserId(id:number): Promise<IUser | null>
  createUser(user:IUser): Promise<IUser>
  deleteUserId(id:number): Promise<number>
  getAllUser(): Promise<IUser[]>
  getAllUserByName(name:string):Promise<IUser[]>
}