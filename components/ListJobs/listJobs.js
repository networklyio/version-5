import React,{useEffect, useState} from 'react'
import styles from '../../pages/jobs/jobs.module.css'
import RoomIcon from '@material-ui/icons/Room'
import TuneIcon from '@material-ui/icons/Tune'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'
import {useScroll} from 'react-use'




export default function ListJobs({jobs}) {
  const [page,setPage] =useState(1)
  const scrollPosition = useScroll()

  useEffect(()=>{
  if(scrollPosition>= document.body.offsetHeight-window.innerHeight){
    console.log('Final de doc')
  }
  },[scrollPosition])

  return (
    <>
    <InfiniteScroll
    dataLength={jobs.length}
    next ={()=>setPage(page+1)}
    hasMore={true}
    inverse={true} 
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
   
    >

            {
      jobs.map(job=>(
      <Link href="/jobs/[category]/[slug]" as={`/jobs/${job.category.slug}/${job.slug}`} key={job.id} > 
      <section className={styles.jobSearch} key={job.id}>
              <div className={styles.jobs}>
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
                <p className={styles.p}>{job.schedule.name}</p>
              </div>
            </div>
            <div/>
             </div>
            </section>
            </Link>
      
      ))}
       </InfiniteScroll>
    </>
  )
}
