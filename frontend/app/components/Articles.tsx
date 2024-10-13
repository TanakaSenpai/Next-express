"use client";
import React, { useEffect, useState } from "react";
import ArticleBox from "./ArticleBox";
import { articleType } from "../schema/article";
import axios from "axios";
import { toast } from "sonner";

const Articles = () => {
  const [articles, setArticles] = useState<articleType[]>([]);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/article/articles"
        );
        setArticles(response.data);
      } catch (err) {
        if (axios.isAxiosError(err))
          toast.error(
            err.response?.data.message ||
              "An error occurred while fetching articles."
          );
        else toast.error((err as Error).message);
      }
    };
    getArticles();
  }, []);
  return (
    <div className="m-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
        {articles.map((article) => (
          <ArticleBox key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
