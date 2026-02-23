import z from "zod";
import "dotenv/config";
const envSchema = z.object({
  NODE_ENV: z.enum(["development","production","test"]).default("development"),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL:z.string().url(),
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
  throw new Error("Environment variable error")
}

export const env = _env.data

