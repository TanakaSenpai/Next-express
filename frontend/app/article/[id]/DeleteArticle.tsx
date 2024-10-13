import Button from '@/app/components/Button';
import React, { FormEvent } from 'react'

const DeleteArticle = ({ onClose }: { onClose: () => void }) => {
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Deleted")
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
                      <Button text='Cancel' color='bg-gray-500' />
                  </div>
              </div>
          </div>
    </div>
  );
}

export default DeleteArticle
