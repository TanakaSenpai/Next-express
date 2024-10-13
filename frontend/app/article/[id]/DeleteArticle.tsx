"use client"
import Button from '@/app/components/Button';
import api from '@/configs/api';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'
import { toast } from 'sonner';

const DeleteArticle = ({ onClose, articleId }: { onClose: () => void, articleId: string }) => {
    const router = useRouter();
    
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await api.delete(`/article/delete/${articleId}`)
            router.push("/?message=article-deleted")
        } catch (error) {
            if (axios.isAxiosError(error)) toast.error(error.response?.data.message || error.response?.data || "And error occurred")
            else toast.error((error as Error).message || "Error")
        }
    }
    
  return (
      <div className="h-screen w-full bg-black bg-opacity-75 flex justify-center items-center absolute top-0">
          <div className="bg-white p-10 rounded-md">
              <p className='text-2xl mb-10'>Are you sure  you want to delete this article?</p>

              <div className='flex gap-4 justify-end'>
                  <div onClick={onSubmit}>
                      <Button text='Ok' color='bg-red-400' />
                  </div>
                  <div onClick={onClose}>
                      <Button type='button' text='Cancel' color='bg-gray-500' />
                  </div>
              </div>
          </div>
    </div>
  );
}

export default DeleteArticle
