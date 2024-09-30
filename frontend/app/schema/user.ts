import { z } from "Zod";


const userSchema = z.object({
    name: z.string().min(2, {message: "Name should have at least 2 characters"}).regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces" }),
    email: z.string().email({message: "Please enter a valid email address"}),
    password: z.string().min(3, {message: "Password must be 3 characters long"})
})

export type User = z.infer<typeof userSchema>;

export default userSchema;
