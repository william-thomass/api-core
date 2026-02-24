import { hash } from "bcryptjs"
import type { User } from "../../lib/prisma/client.js"
import type { usersRepository } from "../../repositories/users-repository.js"

interface RegisterUserRequest{
 name: string
 email: string
 password: string
}

interface RegisterUserResponse{
user:User
}

export class RegisterUserUseCase{
  constructor(
    private userRespository:usersRepository
  ){}

  async execute({
    name,
    email,
    password
  }:RegisterUserRequest):Promise<RegisterUserResponse>{

    const emailExists = await this.userRespository.findByEmail(email)

    if(emailExists){
      throw new Error("Email already exists")
    }

    const password_hash = await hash(password, 10)

    const user = await this.userRespository.create({
      name,
      email,
      password_hash
    })

    return { user }
  }
}