import React,{useEffect,useState} from 'react'
import styles from '../jobs/jobs.module.css'
import RoomIcon from '@material-ui/icons/Room'
import TuneIcon from '@material-ui/icons/Tune'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'

import getConfig from 'next/config'
import Post from '../../components/Posts/Post'
import Categories from '../../components/Posts/Categories'
import States from '../../components/Posts/States'



const { publicRuntimeConfig } = getConfig()

export default function jobPaginate({jobs,states,categories}) {
const [isLoading, setIsLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(0)
const [perPage, setPerPage] = useState(3)
const [category, setCategory] = useState('')
const [edo, setEdo] = useState('')
const [search, setSearch] = useState('')




const filterPost = ()=>{
  if(search.length === 0){
    return jobs.slice(currentPage,currentPage+perPage)  
  }else{
    const filtered = jobs.filter(job=>((job.schedule.name.toUpperCase().includes(search))|| job.position.toUpperCase().includes(search)|| job.state?.name.toUpperCase().includes(search)))
    return filtered.slice(currentPage,currentPage+perPage) 
  }
}

const nextPage = ()=>{
  if(jobs.filter(job=>(job.schedule.name.toUpperCase().includes(search)|| job.state?.name.toUpperCase().includes(search))).length > currentPage+perPage)
  setCurrentPage(currentPage+perPage)}
const prevPage = ()=>{
  if(currentPage>0)
  setCurrentPage(currentPage-perPage)}

  const onSearchChange = (e)=>{
    setCurrentPage(0)
    setSearch(e.target.value.toUpperCase())
  }

useEffect(() => {
 if(category){
  setCurrentPage(0)
  setSearch(category.toUpperCase())
  filterPost()
 }

 if(edo){
  setCurrentPage(0)
  setSearch(edo.toUpperCase())
  filterPost()
 }



}, [category,edo])

  return (
    <>
    <HeaderJobs/>
    <input 
    type="text"
    value ={search}
    onChange = {onSearchChange}
    />
    <Categories categories={categories} category={category} setCategory ={setCategory}/>
    <States states={states} edo={edo} setEdo ={setEdo}/>

    <Post postsList = {filterPost()} loading ={isLoading}/>
    <button onClick={ prevPage} >Anterior</button>
    <button onClick= {nextPage} >siguiente</button>
      <h1>Index</h1>
    </>
  )
}


export async function getServerSideProps() {

  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts?_sort=id:DESC`)
  const dataJobs = await resJobs.json()

  const resCategory = await fetch(`${publicRuntimeConfig.API_URL}/categories`)
  const dataCategory = await resCategory.json()

  const resStates = await fetch(`${publicRuntimeConfig.API_URL}/states`)
  const dataStates = await resStates.json()


  return {
    props:{
      jobs:dataJobs,
      categories:dataCategory,
      states:dataStates
    }
  }

}
