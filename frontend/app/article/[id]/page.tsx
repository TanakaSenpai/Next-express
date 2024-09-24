import Button from "@/app/components/Button";
import React from "react";

export interface ArticleInterface {
  title: string;
  author: string;
  content: string;
  date: string;
  categories: string[];
}

const Article = () => {
  const article: ArticleInterface = 
    {
      title: "The Future of AI in Healthcare",
      author: "John Doe",
      content: `Artificial Intelligence (AI) is transforming healthcare by enabling more accurate diagnoses, personalized treatment plans, and more efficient care delivery. 
    AI is used in medical imaging to detect diseases such as cancer at earlier stages, and in predictive analytics to anticipate patient needs based on data. Machine learning algorithms are assisting doctors in making more informed decisions, while AI-driven robots are performing surgeries with greater precision. 
    In the future, AI is expected to play an even bigger role in advancing medical research, reducing healthcare costs, and improving patient outcomes. However, with these advancements come challenges such as data privacy, algorithmic bias, and the need for regulatory oversight. As AI continues to evolve, it will be essential to address these challenges to fully realize its potential in healthcare.`,
      date: "2024-09-20",
      categories: ["Technology", "Healthcare", "AI"],
    }
  
  return (
    <div className="flex flex-col gap-2 items-center m-5 text-center">
      <p className="text-4xl">{article.title}</p>
      <p>
        <span className="text-gray-500">Posted by</span> {article.author}
      </p>
      <p className="text-gray-500 text-sm">{article.date}</p>
      <p className="text-gray-500">{article.categories.join(", ")}</p>
      <div className="flex justify-end gap-2 w-full">
        <Button text="Edit Article" />
        <Button color="bg-red-400 hover:bg-red-500" text="Delete Article" />
      </div>
      <p className="text-xl text-start lg:mx-20 mt-16">{article.content}</p>
    </div>
  );
};

export default Article;
