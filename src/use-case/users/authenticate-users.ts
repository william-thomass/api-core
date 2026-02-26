import { compare } from "bcryptjs"
import type { User } from "../../lib/prisma/client.js"
import type { usersRepository } from "../../repositories/users-repository.js"

interface AuthenticateResponse{
 user: User
}

interface AuthenticateRequest{
 email: string
 password: string
}

export class AuthenticateUseCase{
  constructor(
    private usersRepository: usersRepository
  ){}

  async execute({
    email,
    password
  }:AuthenticateRequest):Promise<AuthenticateResponse>{

    const user = await this.usersRepository.findByEmail(email)

    if(!user){
      throw new Error("Credentials invalid")
    }

    const passwordMath = await compare(password, user.password_hash)

    if(!passwordMath){
      throw new Error("Credentials invalid")
    }

    return { user }
  }
}