import { z } from zod;

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
        .min(8)
        .max(30)
        .regex(/[A-Z]/, "Atleast One Capital letter Needed")
        .regex(/[a-z]/, "Atleast One Small letter Needed")
        .regex(/[0-1]/, "Atleast One Number Needed")
        .regex(/[0-1]/, "Atleast One Number Needed")
        .regex(/[!@#$%^&*()-_+=/\\:;<>?@[]^`{}|~]/, "Atleast 1 Special Character Needed"),
})

export const loginSchema = z.object({
    email: z.preprocess(
        (value) => typeof value == "string" ? value.trim().toLocaleLowerCase() : "",
        z.email("Email Must Be Valid")
    ),
    password: z.string()
        .min(8)
        .max(30)
        .regex(/[A-Z]/, "Atleast One Capital letter Needed")
        .regex(/[a-z]/, "Atleast One Small letter Needed")
        .regex(/[0-1]/, "Atleast One Number Needed")
        .regex(/[0-1]/, "Atleast One Number Needed")
        .regex(/[!@#$%^&*()-_+=/\\:;<>?@[]^`{}|~]/, "Atleast 1 Special Character Needed"),
})