import type { FastifyReply } from "fastify"
import { ZodError } from "zod"

export function verifyError(res:FastifyReply,  error:unknown){
  if(error instanceof ZodError){
       res.status(400).send({message:error.message, issues:error.format()})
     }
     if(error instanceof Error){
       res.status(400).send({message:error.message})
     }
 
     res.status(500).send("Server Internal Error")
}