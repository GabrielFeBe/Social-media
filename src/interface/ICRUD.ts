export interface ICRUDModelCreator<T>{
  create(data:Omit<T, 'id'>) :Promise<T>
}

export interface ICRUDModelReader<T>{
  findAll():Promise<T>
  findById(id:number):Promise<T | null>
}

export interface ICRUDModelUpdater<T>{
  update(id:number, data: Partial<T>):Promise <T | null>
}

export interface ICRUDModelDeleter{
  delete(id:number):Promise<number>
}