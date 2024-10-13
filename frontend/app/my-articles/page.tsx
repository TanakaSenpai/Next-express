'use client'
import React, { useState } from 'react'
import Articles from '../components/Articles'
import AddArticle from './AddArticle'
import { useSession } from 'next-auth/react'

const MyArticles = () => {
  const [isShowing, setShowing] = useState(false);
  const { data: session } = useSession();
  
  return (
    <div>
      <div className="my-5">
        <h1 className="text-4xl font-semibold text-center">My Articles</h1>
        <div className="flex justify-end mr-10">
          <button className='px-4 py-2 bg-blue-400 text-white rounded-lg ml-auto' onClick={() => setShowing(true)}>Add new article</button>
        </div>
      </div>
          {isShowing && <AddArticle authorId={session!.user.id!} onClose= {() =>  setShowing(false)} />}
          <Articles />
    </div>
  )
}

export default MyArticles
