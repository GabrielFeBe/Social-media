interface Encrypter {
  encrypt(password: string): string
  compare(password: string, hash?: string): boolean
}

export default Encrypter;