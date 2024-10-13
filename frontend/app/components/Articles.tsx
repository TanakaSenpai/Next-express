"use client";
import React from "react";
import ArticleBox from "./ArticleBox";
import { articleType } from "../schema/article";

const Articles = ({ articles }: { articles: articleType[] | null; }) => {
  if (articles)
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
