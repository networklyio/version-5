import React from 'react'

export default function FilterJobs() {
  console.log(jobs)
  return (
    <>
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
      <div className={styles.btnPaginate}>
      <button onClick={() => router.push(`/jobs?page=${page - 1}`)}
        disabled={page <= 1} className={styles.previous}>previous</button>
      <button onClick={() => router.push(`/jobs?page=${page + 1}`)}
        disabled={page >= lastPage} className={styles.next}>next</button>
      </div>

   </>
  )
}
