import React from 'react'
import { ArticleInterface } from '../article/[id]/page';

interface Props {
    article: ArticleInterface;
}

const ArticleBox = ({ article }: Props) => {
  return (
    <div className="flex flex-col gap-1 p-4 border-2 border-slate-200 rounded-lg">
      <p className="font-semibold text-2xl">{article.title}</p>
      <p className="text-gray-500">{article.author}</p>
      <p className="text-gray-500 text-sm">{article.date}</p>
      <p className="text-lg">
        {article.content.length > 250
          ? article.content.slice(0, 250) + "..."
          : article.content}
      </p>
      <p className="text-gray-500 text-sm">{article.categories.join(", ")}</p>
    </div>
  );
};

export default ArticleBox
