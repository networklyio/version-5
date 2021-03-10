import React from 'react'
import styles from '../S3/S3.module.css'
import RoomIcon from '@material-ui/icons/Room'
import Link from 'next/link'

function S3({jobs}) {
  //console.log('Jobs de Clase,', jobs)
  return (
    <>
   
      <section className={styles.jobs}>
        <div className={styles.jobH3}>
          <h3 className={styles.h3}>Open Positions From All Over US</h3>
          <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis facere tempore.</p>
        </div>
      </section>
      {
        jobs.map(job=>(
          <Link href="/jobs/[category]/[slug]" as={`/jobs/${job.category.slug}/${job.slug}`} key={job.id} > 
          <section key={job.id}>
        <div className={styles.jobList}>
        
          <div className={styles.jobPosition}>
            <img className={styles.img} src="/assets/media/home/paper-look.svg" alt="paper icon" />
            <div className={styles.jobTitle}>
              <h3 className={styles.h3}>{job.position}</h3>
              <p className={styles.p}>${job.min_salary} - ${job.max_salary}, full relocation</p>
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
