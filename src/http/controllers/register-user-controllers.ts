import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { MakeRegisterUsers } from "../../use-case/factories/make-register-user.js";
import { verifyError } from "../../utils/errors.js";

export async function registerUserController(req: FastifyRequest, res:FastifyReply){
  const bodySchema = z.object({
    name: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(6).max(15)

  })

  
  try {
    const { name, email, password} = bodySchema.parse(req.body)
    
    const makeRegisterUser = MakeRegisterUsers()

    const user = await makeRegisterUser.execute({
      name,
      email,
      password
    })

    res.status(201).send(user)
  } catch (error) {
    verifyError(res, error)
  }
}