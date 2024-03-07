import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : {
    absolute:'This is Aboslute Example'
  }
}

export default function page() {
  return (
    <div className='h-screen bg-slate-200 text-center'>
        <Link href='/'>Home</Link>
        <h1>
          <Link href='/blog/1'>Blog Post 1</Link>
        </h1>
        <h1>
          <Link href='/blog/2'>Blog Post 2</Link>
        </h1>
        <h1>
          <Link href='/blog/3' replace>Blog Post 3</Link>
        </h1>
        <h1>Blog Post 4</h1>
        <h1>Blog Post 5</h1>
    </div>
  )
}
