import zod from "zod";

export const uploadSchema = zod.object({
    title: zod.string().min(3).max(40),
    content: zod.string(),
});

export const blogChangeSchema = zod.object({
    id: zod.string(),
});

export const signUpSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(7),
    name: zod.string()
});
export const signInSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(7)
    
});

export type signupType = zod.infer<typeof signUpSchema>;
export type signInType = zod.infer<typeof signInSchema>;
export type UpdatePostType = zod.infer<typeof uploadSchema>;
export type ChangePostType = zod.infer<typeof blogChangeSchema>;


