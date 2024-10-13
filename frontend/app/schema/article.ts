import { z } from "zod";



const articleSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  authorId: z.string().optional(),
  content: z
    .string()
    .min(200, { message: "Content must be at least 200 characters." }),
  categories: z.string().min(1, { message: "Categories are required" }),
  createdAt: z.date().default(() => new Date()),
});

export type articleType = z.infer<typeof articleSchema>;

export default articleSchema;
