import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { blogChangeSchema, uploadSchema } from "@manishxninja/common-app2";

type Variables = {
  message: string
}

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: Variables,
}>();



  blogRouter.use('/*', async(c, next) => {
    const jwt = c.req.header('Authorization');
  
    if(!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized"});
    }
  
    const user = await verify(jwt,c.env.JWT_SECRET);
  
    if(!user) {
      c.status(401);
      return c.json(
        {error: "unauthorized"}
      );
    }

    const str = String(user.id);
    c.set('message', str);
    console.log("hello");
    await next()
    
  
  });




blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.findMany({});
    console.log(post);
    return c.json({
      post
    })
    
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.findUnique({
        where: {
          id
        }
    });

    return c.json({
      post
    });

})

blogRouter.put('/change', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("message");
  

  const body = await c.req.json();
  const {success} = blogChangeSchema.safeParse(body);


    if(!success) {
      c.status(403);
      c.json({
        "message": "wrong Input"
      })
    }

  if (!userId || !body.id) {
      return c.json({ error: 'Invalid request' }, 400);
  }

  await prisma.post.update({
      where: {
          id: body.id,
          authorId: userId
      },
      data: {
          title: body.title,
          content: body.content
      }
  });

  return c.text('Updated post');
});

blogRouter.post('/upload', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = uploadSchema.safeParse(body);


    if(!success) {
      c.status(403);
      c.json({
        "message": "wrong Input"
      })
    }
    const authorId = c.get( "message");

    const blog = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: authorId
        }
    });

    return c.json({
      id: blog.id
    })


})