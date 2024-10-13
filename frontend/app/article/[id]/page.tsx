"use client";
import Button from "@/app/components/Button";
import React, { useEffect, useState } from "react";
import EditArticle from "./EditArticle";
import { articleType } from "@/app/schema/article";
import DeleteArticle from "./DeleteArticle";
import { useSession } from "next-auth/react";
import axios from "axios";
import api from "@/configs/api";
import { toast } from "sonner";

const Article = ({ params }: { params: { id: string } }) => {
  const [isLoading, setLoading] = useState(false);
  const [showEdit, setEdit] = useState(false);
  const [showDelete, setDelete] = useState(false);
  const [name, setName] = useState("");
  const [article, setArticle] = useState<articleType | null>(null);
  const articleId = params.id;

  const { data: session } = useSession();

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      try {
        const result = await api(`/article/article/${articleId}`);
        setArticle(result.data);
      } catch (error) {
        if (axios.isAxiosError(error))
          toast.error(error.response?.data.message || "An error occurred");
        // Improved error handling
        else toast.error((error as Error).message);
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };

    if (articleId) {
      getArticle();
    } else {
      toast.error("Article ID not found");
    }
  }, [articleId]); 

  useEffect(() => {
    const getName = async () => {
      if (article) {
        
        try {
          const nameResult = await api(`/api/user/getname/${article.authorId}`);
          setName(nameResult.data.name);
        } catch (error) {
          if (axios.isAxiosError(error))
            toast.error(
              error.response?.data.message ||
                error.message ||
                "An error occurred while fetching name"
            );
          else toast.error((error as Error).message);
        }
      }
    };

    getName();
  }, [article]);

  if (isLoading) return <p>Loading...</p>;
  if (!article)
    return <p className="text-red-400 text-4xl text-center m-10">Not found</p>;

  return (
    <div className="flex flex-col gap-2 items-center m-5 text-center">
      <p className="text-4xl">{article.title}</p>
      <p>
        <span className="text-gray-500">Posted by</span> {name}
      </p>
      <p className="text-gray-500 text-sm">
        {new Date(article.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-500">{article.categories}</p>
      {article.authorId === session?.user.id && (
        <div className="flex justify-end gap-2 w-full">
          <div onClick={() => setEdit(true)}>
            <Button text="Edit Article" />
          </div>
          {showEdit && (
            <EditArticle
              onClose={() => setEdit(false)}
              article={article}
              onUpdate={(updatedArticle: articleType) => {
                setArticle(updatedArticle)
                setEdit(false)
              }
              }
            />
          )}
          <div onClick={() => setDelete(true)}>
            <Button color="bg-red-400 hover:bg-red-500" text="Delete Article" />
          </div>
          {showDelete && <DeleteArticle articleId={article._id!} onClose={() => setDelete(false)} />}
        </div>
      )}
      <p className="text-xl text-start lg:mx-20 mt-16">{article.content}</p>
    </div>
  );
};

export default Article;
