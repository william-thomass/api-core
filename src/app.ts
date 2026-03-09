import fastify from "fastify";
import { appRoutes } from "./http/routes.js";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env/index.js";

export const app = fastify()

app.register(appRoutes)

app.register(fastifyJwt, {
 secret:env.SECRET_JWT
})