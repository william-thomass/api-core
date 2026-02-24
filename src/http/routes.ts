import type { FastifyInstance } from "fastify";
import { registerUserController } from "./controllers/register-user-controllers.js";

export function appRoutes(app: FastifyInstance){
  app.post("/register", registerUserController)
}