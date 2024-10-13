import { z } from "zod";


export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name should have at least 2 characters" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name can only contain letters and spaces",
      }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(3, { message: "Password must be 3 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Optional: path to show the error on
  });

export type RegType = z.infer<typeof registerSchema>



export const signInSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  password: z.string({ message: "Password is required" }),
});

export type SignInType = z.infer<typeof signInSchema>;



