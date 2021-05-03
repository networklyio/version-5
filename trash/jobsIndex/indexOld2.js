import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { QueryClientProvider, useQuery, useQueryClient} from 'react-query'
import styles from '../jobs/jobs.module.css'
import RoomIcon from '@material-ui/icons/Room'
import TuneIcon from '@material-ui/icons/Tune'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import getConfig from 'next/config'
import useSWR from 'swr'


const { publicRuntimeConfig } = getConfig()
const perPage =3

const fetcher = (...args)=>fetch(...args).then(res=>res.json())

export default function jobPage({jobs,category,states}) {
const router = useRouter()
const queryClient = useQueryClient()
const [categoryId, setCategoryId] = useState(null)
const [stateId, setstateId] = useState(null)
const [isFiltered, setIsFiltered] = useState(false)
const [datos, setDatos] = useState([])
 const [pageIndex, setPageIndex] = useState(1);

const [str, setStr] = useState(`?_limit=${perPage}&_start=${pageIndex*perPage}`)
const query = []


 const url = `${publicRuntimeConfig.API_URL}/posts${str}`
 

 const { errors, data } = useSWR(url, fetcher);

 if(errors) return <div>Error en carga</div>
 if(!data) return <div>Loading........</div>
 //console.log(data)
 useEffect(() => {
  if(categoryId || stateId){
   if(categoryId){query.push(`category=${categoryId}`)}
    if(stateId){query.push(`state=${stateId}`)}
    setStr(`?_limit=${perPage}&_start=${pageIndex*perPage}&${query.join('&')}`)
   
   let filtrados = data.filter(post => {
    console.log(str)    
    
   //console.log('Filtrados','Estado'+post.state?.id,'Categoria'+post.category.id)
 })
 }else{
   console.log('No hay filtrado')
 }
  
 }, [categoryId,stateId])
 

  return (
    <>
     <HeaderJobs />
     <QueryClientProvider client={queryClient}>
    

     <div className={styles.principal}>
   <div  className={styles.filtro}>
            <p className={styles.filterTitle}>Filter by</p>
            <div>
            <Select getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
              options={category} instanceId="category" placeholder="Filter by category"
              isClearable
              onChange={value => setCategoryId(value ? value.id : null)} className={styles.filtro}/>
            </div>
            <div>

            <Select
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
            options={states}
            instanceId="states"
            placeholder="Filter by state"
            isClearable
            onChange={value => setstateId(value ? value.id : null)}
          />
            </div>
            <div className={styles.filterOption}>
            </div>
            <div className={styles.settings}>
                <i className={styles.fas}><TuneIcon/></i>
            </div>
        </div>
        <div className={styles.listado}>
        <>
      
        { 
data.map(job=>(
<Link href="/jobs/[category]/[slug]" as={`/jobs/${job.category?.slug}/${job.slug}`} key={job.id} > 
<section className={styles.jobSearch} key={job.id}>
        <div className={styles.jobs}>
          <div className={styles.jobList}>
        <div className={styles.jobPosition}>
          <img className={styles.img} src="/assets/media/home/paper-look.svg" alt="paper icon" />
          <div className={styles.jobTitle}>
            <h3 className={styles.h3}>{job.position}</h3><h4><small></small> </h4>
            <p className={styles.p}>${job.min_salary} - ${job.max_salary}</p>
          </div>
        </div >
        <div className={styles.location}>
          <h4><p></p></h4>
      
        <i className={styles.fas}><RoomIcon /></i>
          <p className={styles.p}>{job.City}, {job.state && job.state.name}</p>
        </div>
        <div className={styles.timePosition}>
          <p className={styles.p}>{job.schedule.name}</p>
        </div>
      </div>
      <div/>
       </div>
      </section>
      </Link>

))}

   </>
  
       </div>
   </div>
  
    <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </QueryClientProvider>
 </>
  )
}

export async function getServerSideProps() {

  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts?_sort=id:DESC&_limit=10`)
  const dataJobs = await resJobs.json()

  const resCategory = await fetch(`${publicRuntimeConfig.API_URL}/categories`)
  const dataCategory = await resCategory.json()

  const resStates = await fetch(`${publicRuntimeConfig.API_URL}/states`)
  const dataStates = await resStates.json()


  return {
    props:{
      jobs:dataJobs,
      category:dataCategory,
      states:dataStates
    }
  }

}
