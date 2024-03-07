import React from 'react'

export default function page({params}:{
    params:{postid:string}
}) {
  return (
    <div>Post Details of ID - {params.postid}</div>
  )
}
