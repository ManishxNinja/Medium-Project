import zod from "zod";
export declare const uploadSchema: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const blogChangeSchema: zod.ZodObject<{
    id: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const userSchema: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type signupType = zod.infer<typeof userSchema>;
export type UpdatePostType = zod.infer<typeof uploadSchema>;
export type ChangePostType = zod.infer<typeof blogChangeSchema>;
