import React from 'react'
import { Metadata } from 'next'

type Props = {
  params : {
    postid : string
  }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
      title : `Blog Post ID - ${params.postid}`
    }
}

export default function page({params}: Props) {
  return (
    <div className='h-screen bg-yellow-200'>
      <h1 className='p-4 pt-20 text-8xl font-extralight text-center'>Post Details of ID - {params.postid}</h1>
    </div>
  )
}
