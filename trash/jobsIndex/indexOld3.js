import React, {useState, useEffect} from 'react'
import axios from 'axios'
import getConfig from 'next/config'
import Post from '../../components/Posts/Post'
import Pagination from '../../components/Posts/Pagination'
import Categories from '../../components/Posts/Categories'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'

const { publicRuntimeConfig } = getConfig()

export default function Paginate({categorias}) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(2)
  const [url, setUrl] = useState(`${publicRuntimeConfig.API_URL}/posts`)
  const [categoryId, setCategoryId] = useState(null)
  const [stateId, setstateId] = useState(null)
  const [categoria, setCategoria] = useState('')


 
useEffect(() => {
  const query = []
  setUrl('')
  if(categoria && categoria>0){query.push(`category=${categoria}`)}
  // if(stateId){query.push(`state=${stateId}`)}
  const str =`?${query.join('&')}`
  console.log(str)
  if(str.length>1){ setUrl(url+str)}else{
    setUrl(`${publicRuntimeConfig.API_URL}/posts`)
  }
  console.log(url)
  const fetchPost = async ()=>{
    setLoading(true)
    const res = await axios.get(url)
    setPosts(res.data)
    setLoading(false)
  }
  fetchPost()  
}, [stateId,categoria])

const indexOfLastPost  = currentPage * postPerPage
const indexOfFirstPost =  indexOfLastPost -postPerPage
const currentPost      = posts.slice(indexOfFirstPost,indexOfLastPost)
const paginate = (pageNumber)=>setCurrentPage(pageNumber)

  return (
    <>
   <HeaderJobs/>
    
     <Post posts ={currentPost} loading = {loading}/>
     <Categories categorias={categorias} categoria={categoria} setCategoria ={setCategoria}/>
     <h1>{categoria}</h1>
     <Pagination 
     postsPerPage = {postPerPage} 
     totalPosts = {posts.length} 
     paginate = {paginate}/>
    
    </>
  )
}



export async function getServerSideProps() {
  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts`)
  const dataJobs = await resJobs.json()

  const resCat = await fetch(`${publicRuntimeConfig.API_URL}/categories`)
  const dataCats = await resCat.json()


  return {
    props:{
      categorias : dataCats
    }
  }
}