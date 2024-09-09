import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign,decode,verify } from 'hono/jwt';
import { signUpSchema } from "@manishxninja/common-app2"
import { signInSchema } from "@manishxninja/common-app2"


export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    },
  }>();

userRouter.post('/signup', async (c) => {
// Initialize Prisma Client with the correct 'datasources' key
    const prisma = new PrismaClient({
      
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

  
    const body = await c.req.json();
    const {success} = signUpSchema.safeParse(body);


    if(!success) {
      c.status(403);
      c.json({
        "message": "wrong Input"
      })
    }
  
    try {
  
  
  
  
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        },
      });
  

      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  
      return c.json({ jwt });
    } catch (e) {
      console.error('Error during user signup:', e);
      c.status(500); 
      return c.json({ error : 'Error while signing up' });
    } finally {
      
      await prisma.$disconnect();
    }
  });

  
userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({

		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  const {success} = signInSchema.safeParse(body);


    if(!success) {
      c.status(403);
      c.json({
        "message": "wrong Input"
      })
    }

	const user = await prisma.user.findUnique({
		where: {
			email: body.email,
      password: body.password
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}
	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})