//contrato

import type { Prisma } from "../lib/prisma/browser.js";
import type { User } from "../lib/prisma/client.js";

export interface usersRepository{
  create(data: Prisma.UserCreateInput):Promise<User>
  findById(id: string):Promise<User | null>
  findByEmail(email: string):Promise<User | null>
}