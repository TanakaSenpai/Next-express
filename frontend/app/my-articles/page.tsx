import React from 'react'
import Articles from '../components/Articles'

const MyArticles = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-4xl font-semibold text-center">My Articles</h1>
        <div className="flex justify-end mr-10">
        <button className='px-4 py-2 bg-blue-400 text-white rounded-lg ml-auto'>Add new article</button>
        </div>
      </div>
          <Articles />
    </div>
  )
}

export default MyArticles
