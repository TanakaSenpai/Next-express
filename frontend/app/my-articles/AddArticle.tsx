import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import articleSchema, { articleType } from "../schema/article";
import axios from "axios";
import { toast } from "sonner";
import api from "@/configs/api";

const AddArticle = ({ authorId, onClose }: { authorId: string; onClose: () => void }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<articleType>({
    resolver: zodResolver(articleSchema)
  });

  const onSubmit = async (data: articleType) => {
    data.authorId = authorId;
    try {
      const response = await api.post("/article/create", data);
      toast.success(response.data.message)
      reset()
    } catch (error) {
     if (axios.isAxiosError(error)) {
      // Check if the error response exists and has a message
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong with the request.");
      }
    } else {
      // Handle non-Axios errors (unexpected errors)
      toast.error((error as Error).message || "An unexpected error occurred.");
      }
    }
  }

  return (
    <div className="h-screen w-full bg-black bg-opacity-75 flex justify-center items-center absolute top-0">
      <form
        className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md flex flex-col gap-6 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          type="button"
          className="absolute top-0 right-0 px-4 py-2 text-white m-4 rounded-md bg-red-400 hover:bg-red-300 transition duration-300"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-center text-4xl my-8">Add New Article</h2>
        <div>
          <label htmlFor="title" className="mb-3">
            Title:
          </label>
          <input
            type="text"
            {...register("title")}
            id="title"
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Title"
          />
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="content" className="mb-3">
            Content:
          </label>
          <textarea
            {...register("content")}
            id="content"
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Content"
            rows={5}
          ></textarea>
          {errors.content && (
            <p className="text-red-400">{errors.content.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="categories" className="mb-3">
            Categories:
          </label>
          <input
            type="text"
            {...register("categories")}
            id="categories"
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Write categories separated by comma (ex: Tech, Ai)"
          />
          {errors.categories && (
            <p className="text-red-400">{errors.categories.message}</p>
          )}
        </div>
        <button type="submit" className="w-full mt-4 py-2 bg-blue-400 text-white rounded-lg">
          Add Article
        </button>
      </form>
    </div>
  );
};

  export default AddArticle;
