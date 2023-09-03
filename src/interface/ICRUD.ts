export interface ICRUDModelCreator<T>{
  create(data:Omit<T, 'id'>) :Promise<T>
}

export interface ICRUDModelReader<T>{
  findAll():Promise<T[]>
  findById(id:number):Promise<T | null>
}
export interface ICRUDModelPostReader<T>{
  findAll():Promise<T[]>
  findById(id:number):Promise<T | null>
  findPostByUserId(id:number): Promise<T[]>
}
export interface ICRUDModelUserReader<T>{
  findAll():Promise<T[]>
  findById(id:number):Promise<T | null>
  findAllByName(name:string):Promise<T[]>
  findUserByEmail(email:string):Promise<T | null>
}
export interface ICRUDFriendsModel<T>{
  findAllUserFriends():Promise<T[]>
  findFriendsUserById(id:number):Promise<T | null>
}

export interface ICRUDModelUpdater<T>{
  update(id:number, data: Partial<T>):Promise <T | null>
}

export interface ICRUDModelDeleter{
  delete(id:number):Promise<number>
}