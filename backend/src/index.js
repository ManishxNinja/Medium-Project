import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
// Create the main Hono app with type bindings for environment variables
const app = new Hono();
app.post('/api/v1/signup', async (c) => {
    // Initialize Prisma Client with the correct 'datasources' key
    const prisma = new PrismaClient({
        datasources: {
            db: {
                //@ts-ignore
                url: c.env.DATABASE_URL,
            },
        },
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            },
        });
        //@ts-ignore
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
    }
    catch (e) {
        console.error('Error during user signup:', e);
        c.status(500); // Use 500 status code for server errors
        return c.json({ error: 'Error while signing up' });
    }
    finally {
        // Disconnect the Prisma client to avoid connection leaks
        await prisma.$disconnect();
    }
});
app.get('api/v1/blog/bulk', (c) => {
    return c.text('Hello Hono!');
});
app.get('api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!');
});
app.put('api/v1/blog/', (c) => {
    return c.text('Hello Hono!');
});
app.post('api/v1/blog/', (c) => {
    return c.text('Hello Hono!');
});
app.post('api/v1/user/signin', (c) => {
    return c.text('Hello Hono!');
});
export default app;
