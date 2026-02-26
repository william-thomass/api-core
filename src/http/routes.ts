import type { FastifyInstance } from "fastify";
import { registerUserController } from "./controllers/register-user-controllers.js";
import { authenticateUserController } from "./controllers/authenticate-user-controller.js";

export function appRoutes(app: FastifyInstance){
  app.post("/register", registerUserController)
  app.post("/session", authenticateUserController)
}