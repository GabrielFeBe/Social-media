export interface Requester{
  id:number
  name:string
  email:string
  profilePicture:string
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  name: string;
  description:string;
  profilePicture:string;
  local:string;
  requested?:Requester[];
  requester?:Requester[];
  friends?:Requester[];
}