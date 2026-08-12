import { z } from "zod";

export const signupSchema = z.object({
    name:
        z.string().trim()
            .min(3, "Minimum Lenngth Of Name is 3")
            .max(30, "Maximum Length Of Name is 30"),
    age: z.number()
        .min(10, "Min Age To Register Is 10")
        .max(100, "Maximum Age To Use Is 100")
        .optional(),
    email: z.preprocess(
        (value) => typeof value == "string" ? value.trim().toLocaleLowerCase() : "",
        z.email("Email Must Be Valid")
    ),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(30, "Password must not exceed 30 characters")
        .regex(/[A-Z]/, "At least one capital letter needed")
        .regex(/[a-z]/, "At least one small letter needed")
        .regex(/[0-9]/, "At least one number needed")
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]/, "At least one special character needed")
})

export const loginSchema = z.object({
    email: z.preprocess(
        (value) => typeof value == "string" ? value.trim().toLocaleLowerCase() : "",
        z.email("Email Must Be Valid")
    ),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(30, "Password must not exceed 30 characters")
        .regex(/[A-Z]/, "At least one capital letter needed")
        .regex(/[a-z]/, "At least one small letter needed")
        .regex(/[0-9]/, "At least one number needed")
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]/, "At least one special character needed")
})