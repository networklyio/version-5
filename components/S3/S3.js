import React,{useState,useEffect} from 'react'
import styles from '../S3/S3.module.css'
import RoomIcon from '@material-ui/icons/Room'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig()

function S3({jobs,numJobs}) {
const [data, setData] = useState(jobs)
const [hasMore, setHasMore] = useState(true)

const getMostData = async ()=>{

  

  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?_sort=id:DESC&_limit=10&_start=${data.length}`)
  const newData = await res.json()
  setData(data=>[...data, ...newData])
}

useEffect(()=>{
  setHasMore(numJobs > data.length ? true:false)
},[data])

  return (
    <>
  
     
      {
        data.map(job=>(
          <Link href="/jobs/[category]/[slug]" as={`/jobs/${job.category?.slug}/${job.slug}`} key={job.id} > 
          <section key={job.id}>
        <div className={styles.jobList}>
        
          <div className={styles.jobPosition}>
            <img className={styles.img} src="/assets/media/home/paper-look.svg" alt="paper icon" />
            <div className={styles.jobTitle}>
              <h3 className={styles.h3}>{job.position}</h3>
              <p className={styles.p}>${job.min_salary} - ${job.max_salary}</p>
            </div>
          </div >
          <div className={styles.location}>
        
          <i className={styles.fas}><RoomIcon /></i>
            <p className={styles.p}>{job.City}, {job.state && job.state.name}</p>
          </div>
          <div className={styles.timePosition}>
            <p className={styles.p}>{job.schedule && job.schedule?.name}</p>
          </div>
        </div>
        <div/>
      </section>
      </Link>

))} 
</> 
  )
}



export default S3
