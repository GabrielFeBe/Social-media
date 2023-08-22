export interface UserDefault {
  email: string;
  password: string;
  id: number;
}

export interface TokenGenerator {
  generate(user: UserDefault): string
  verifyToken(token: string) :JwtPayload
    
}

export interface JwtPayload {
  id: number;
  username: string
}
