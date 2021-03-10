import getConfig from 'next/config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { QueryClientProvider, useQuery, useQueryClient } from 'react-query'
import styles from '../jobs/jobs.module.css'
import RoomIcon from '@material-ui/icons/Room'
import TuneIcon from '@material-ui/icons/Tune'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import SearchInput from '../../components/SearchInput/SearchInput'
import FilterJobs from '../../components/FilterJobs/FilterJobs'
import noFilterJobs from '../../components/FilterJobs/NoFilterJobs'




export default function JobsPage({ jobs, page, numJobs,category, states }) {
  //console.log(jobs,page, numJobs)
  const router = useRouter()
  const queryClient = useQueryClient()
  const [categoryId, setCategoryId] = useState(null)
  const [stateId, setstateId] = useState(null)
  const [isFiltered, setIsFiltered] = useState(false)
  const[imprime, setImprime]=useState([])



  const getJobs = async (key) => {
    const idCategory = key.queryKey[1].category
    const stateId = key.queryKey[2].states
    //console.log(idCategory,stateId)
    if(idCategory!==null || stateId !==null){setIsFiltered(true)}else{setIsFiltered(false)}
    //console.log(isFiltered,idCategory,stateId)
    
  if(idCategory && stateId){
      const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?category=${idCategory}&state=${stateId}`)
        return res.json() 
        console.log('categoria y estado ',res)
        }
  
  if(stateId){
          const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?state=${stateId}`)
            return res.json() 
            }
  
    if(idCategory){
  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?category=${idCategory}`)
    return res.json() 
    console.log('Solo Categorias',res)
    }
  
    const res = await fetch(`${publicRuntimeConfig.API_URL}/posts`)
    return res.json() 
  }
  
  
  const { data, status } = useQuery(['jobs', { category: categoryId }, { states: stateId }], getJobs, { initialData: jobs })



  const lastPage = Math.ceil(numJobs / 3)

  useEffect(()=>{
  if(isFiltered==true){setImprime(data)}else{setImprime(jobs)}
   
  },[isFiltered,page])


 
  return (
    <>
    <QueryClientProvider client={queryClient}>
   <HeaderJobs />

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
imprime.map(job=>(
<Link href="/jobs/[category]/[slug]" as={`/jobs/${job.category.slug}/${job.slug}`} key={job.id} > 
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
     {
       (!isFiltered && (
      <div className={styles.btnPaginate}>
      <button onClick={() => router.push(`/jobs?page=${page - 1}`)}
        disabled={page <= 1} className={styles.previous}>previous</button>
      <button onClick={() => router.push(`/jobs?page=${page + 1}`)}
        disabled={page >= lastPage} className={styles.next}>next</button>
      </div>))
     }

   </>
  
       </div>
   </div>
   </QueryClientProvider>
    </>
    )
}


const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 3

  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts/count`)
  const numJobs = await resJobs.json()


  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?_limit=3&_start=${start}`)
  const data = await res.json()

  const resCategory = await fetch(`${publicRuntimeConfig.API_URL}/categories`)
  const dataCategory = await resCategory.json()

  const resStates = await fetch(`${publicRuntimeConfig.API_URL}/states`)
  const dataStates = await resStates.json()

  return {
    props: {
      jobs: data,
      page: +page,
      numJobs: numJobs,
      category: dataCategory,
      states: dataStates
    }
  }
}
