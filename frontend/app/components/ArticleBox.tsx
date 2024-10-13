"use client"
import React, { useEffect, useState } from 'react'
import { articleType } from '../schema/article';
import api from '@/configs/api';
import axios from 'axios';
import { toast } from 'sonner';
import Link from 'next/link';

const ArticleBox = ({ article }: { article: articleType }) => {
  const [name, setName] = useState("")
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get(`/api/user/getname/${article.authorId}`);
        const name = response.data.name;
        setName(name)
      } catch (error) {
        if (axios.isAxiosError(error)) toast.error(error.response?.data.message)
        else toast.error((error as Error).message)
      } 
    }
    getUser()
  }, [article.authorId])
  
  return (
    <Link href={`/article/${article._id!}`} className="flex flex-col gap-1 p-4 border-2 border-slate-200 rounded-lg">
      <p className="font-semibold text-2xl">{article.title}</p>
      <p className="text-gray-500">{name}</p>
      <p className="text-gray-500 text-sm">{new Date(article.createdAt).toLocaleString()}</p>
      <p className="text-lg">
        {article.content.length > 250
          ? article.content.slice(0, 250) + "..."
          : article.content}
      </p>
      <p className="text-gray-500 text-sm">{article.categories}</p>
    </Link>
  );
};

export default ArticleBox
