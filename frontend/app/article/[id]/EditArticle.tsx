import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import articleSchema, { articleType } from "@/app/schema/article";
import { toast } from "sonner";
import axios from "axios";
import api from "@/configs/api";

const EditArticle = ({
  onClose,
  onUpdate,
  article,
}: {
  onClose: () => void;
  onUpdate: (updatedArticle: articleType) => void;
  article: articleType;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<articleType>({
    resolver: zodResolver(articleSchema),
  });

  const onSubmit = async (data: articleType) => {
    data._id = article._id;
    try {
      const result = await api.post(`/article/update`, data);
      toast.success("Article updated successfully.");
      onUpdate(result.data.article)
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data.message ||
            error.response?.request.message ||
            error.message ||
            "An error occurred."
        );
      }
      else toast.error((error as Error).message);
    }
  };

  return (
    <div className="h-screen w-full bg-black bg-opacity-75 flex justify-center items-center absolute top-0">
      <form
        className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md flex flex-col gap-6 relative text-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className="absolute top-0 right-0 px-4 py-2 text-white m-4 rounded-md bg-red-400 hover:bg-red-300 transition duration-300"
          onClick={onClose}
          type="button"
        >
          X
        </button>
        <h2 className="text-center text-4xl my-8">Edit Article</h2>
        <div>
          <label htmlFor="title" className="mb-3">
            Title:
          </label>
          <input
            type="text"
            {...register("title")}
            id="title"
            defaultValue={article.title}
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
            defaultValue={article.content}
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
            defaultValue={article.categories}
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Write categories separated by comma (ex: Tech, Ai)"
          />
          {errors.categories && (
            <p className="text-red-400">{errors.categories.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-400 text-white rounded-lg"
        >
          Save
        </button>
      </form>
      but
    </div>
  );
};

export default EditArticle;
