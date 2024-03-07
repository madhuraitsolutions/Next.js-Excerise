import React from 'react'

export const metadata = {
  title : {
    absolute:'This is Aboslute Example'
  }
}

export default function page() {
  return (
    <div className='h-screen bg-slate-200 text-center'>
        <h1>Blog Post 1</h1>
        <h1>Blog Post 2</h1>
        <h1>Blog Post 3</h1>
        <h1>Blog Post 4</h1>
        <h1>Blog Post 5</h1>
    </div>
  )
}
