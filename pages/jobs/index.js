import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Select from 'react-select'
import { QueryClientProvider, useQuery, useQueryClient } from 'react-query'
import styles from '../jobs/jobs.module.css'
import RoomIcon from '@material-ui/icons/Room'
import TuneIcon from '@material-ui/icons/Tune'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import SearchInput from '../../components/SearchInput/SearchInput'

import getConfig from 'next/config'
import States from '../jobs/states/States'
import Categories from '../jobs/[category]/Categories'
import Post from './posts/posts'
import Items from './items/Items'




export default function jobsPage({jobs,categories,states}) {
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [stateId, setStateId] = useState(null)
  const [isFiltered, setIsFiltered] = useState(false)
  const [postsList , setPostsList ] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage, setPerPage] = useState(5)
  let totalPage = 0
  let str = ''

const filterPost = ()=>{
const resultado = (jobs.filter(job=>{
 if(categoryId && stateId) return (job.category?.id==categoryId && job.state?.id==stateId )
 if(categoryId) return job.category?.id==categoryId
 if(stateId) return job.state?.id==stateId
 return  job
}))
totalPage = resultado.length

return resultado.slice(currentPage,currentPage+perPage)
}

  const nextPage = ()=>{
 if(totalPage>currentPage+perPage)
    setCurrentPage(currentPage+perPage)
  }

  const prevPage = ()=>{
    if(currentPage-perPage>=0)
    setCurrentPage(currentPage-perPage)
  }

  useEffect(() => {
    const query = []
    if(categoryId){query.push(`job.category?.id==${categoryId}`)}
    if(stateId){query.push(`job.state?.id==${stateId}`)}
    if(categoryId)  setIsFiltered(true)
    if(stateId) setIsFiltered(true)
    str = ``
    if(isFiltered) str = (`${query.join(' && ')}`)     

  }, [])
  


  return (
    <>
  <QueryClientProvider client={queryClient}>
   <HeaderJobs />
   <div className={styles.principal}>
   <div  className={styles.filtro}>
            <p className={styles.filterTitle}>Filter by</p>
            <div>
           <Categories categories={categories} setCategoryId ={setCategoryId}/>
            </div>
          <div>
          <States states={states}  setStateId ={setStateId}/>
          </div>
          <div className={styles.filterItem}>
          <Items setPerPage ={setPerPage} />
          </div>
    </div>
    <div className={styles.listado}>
    {/* <h1>List of Jobs: {totalPage} page:{currentPage}</h1> */}
    <Post postsList={filterPost()} isLoading={isLoading}/>

    </div>
    </div>
    </QueryClientProvider>
    <div className={styles.btnPaginate}>
      <button   className={styles.previous} onClick={prevPage}>previous</button>
      <button  className={styles.next} onClick={nextPage}>next</button>
      </div>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps() {
  
  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts/count`)
  const numJobs = await resJobs.json()


  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?_sort=id:DESC`)
  const data = await res.json()

  const resCategory = await fetch(`${publicRuntimeConfig.API_URL}/categories`)
  const dataCategory = await resCategory.json()

  const resStates = await fetch(`${publicRuntimeConfig.API_URL}/states`)
  const dataStates = await resStates.json()

  return {
    props: {
      jobs: data,
      numJobs: numJobs,
      categories: dataCategory,
      states: dataStates
    }
  }
}
