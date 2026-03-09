import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { registerUserController } from "./controllers/register-user-controllers.js";
import { authenticateUserController } from "./controllers/authenticate-user-controller.js";
import { verifyJwt } from "./middlewares/verify-jwt.js";

export async function appRoutes(app: FastifyInstance){
  app.post("/register", registerUserController)
  app.post("/session", authenticateUserController)

  //ROTA PRIVADAS COM AUTHENTICAÇAO/AUTORIZAÇÃO
  app.register((RoutesPrivate) => {
    RoutesPrivate.addHook("onRequest", verifyJwt)
    RoutesPrivate.post('/test', authenticateUserController)

  })
}