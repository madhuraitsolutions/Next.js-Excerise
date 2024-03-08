"use client"

import React from 'react'

export default function errorBoundary({error}:{
    error: Error
}) {
  return (
    <div className='h-screen text-center'>
        <h1 className='text-red-500 text-5xl'>
            {error.message}
        </h1>
    </div>
  )
}
