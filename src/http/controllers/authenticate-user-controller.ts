import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { MakeAuthenticateUsers } from "../../use-case/factories/make-authenticate-user.js";
import { verifyError } from "../../utils/errors.js";

export async function authenticateUserController(req: FastifyRequest , res:FastifyReply){
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(15),
  })

  try {
    const { email, password} = bodySchema.parse(req.body)

    const makeAuthenticate = MakeAuthenticateUsers()
    const { user } = await makeAuthenticate.execute({
      email,
      password
    })

    const token = await res.jwtSign({},{
      sign:{
        sub:user.id,
        expiresIn:"7d"
      }
    })

    res.status(200).send({token})


  } catch (error) {
    verifyError(res, error)
  }
}