import type { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJwt(req:FastifyRequest, res:FastifyReply ){
  try {
    await req.jwtVerify()
  } catch (error) {
    if(error){
      res.status(401).send({message:"User unauthorized"})
    }
    //throw new Error("User unauthorized")
  }
}