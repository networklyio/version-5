import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumber = []

  for (let i = 1; i < (Math.ceil(totalPosts/postsPerPage)); i++){
    pageNumber.push(i)  
  }

  


  return (
    <nav>
      <ul>
        {pageNumber.map(page=>(<li key = {page}>
          <a href="#" onClick={()=>paginate(page)}>{page}</a>
          </li>))}
      </ul>
    </nav>
  )
}
