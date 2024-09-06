import zod from "zod";

export const uploadSchema = zod.object({
    title: zod.string().min(3).max(40),
    content: zod.string(),
});

export const blogChangeSchema = zod.object({
    id: zod.string(),
});

export const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(7)
});

export type signupType = zod.infer<typeof userSchema>;
export type UpdatePostType = zod.infer<typeof uploadSchema>;
export type ChangePostType = zod.infer<typeof blogChangeSchema>;


