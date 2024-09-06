import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';



// Create the main Hono app with type bindings for environment variables
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    userId: string;
  }
}>();

app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)


export default app
