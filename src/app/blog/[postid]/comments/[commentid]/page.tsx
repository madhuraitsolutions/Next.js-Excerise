import React from 'react'

function getRandomInt(count: number){
  return Math.floor(Math.random() * count)
}

export default function page({params}:{
    params:{
        postid:string
        commentid:string
    }    
}) {

  const random = getRandomInt(2)

  if(random === 1){
    throw new Error('error loading this comment')
  }

  return (
    <div className='h-screen text-center p-4'>
      <h1 className='text-4xl'>Comment {params.commentid} for the post {params.postid}</h1>
    </div>
  )
}
