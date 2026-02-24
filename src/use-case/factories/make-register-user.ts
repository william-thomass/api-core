import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository.js";
import { RegisterUserUseCase } from "../users/register-users.js";

export function MakeRegisterUsers(){
  const userRepository = new PrismaUsersRepository()
  const useCase = new RegisterUserUseCase(userRepository)
  return useCase
}