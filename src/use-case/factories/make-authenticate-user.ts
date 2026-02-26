import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository.js";
import { AuthenticateUseCase } from "../users/authenticate-users.js";

export function MakeAuthenticateUsers(){
  const userRepository = new PrismaUsersRepository()
  const useCase = new AuthenticateUseCase(userRepository)
  return useCase
}