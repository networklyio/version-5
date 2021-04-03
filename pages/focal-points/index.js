import React from 'react'
import Link from 'next/link'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import styles from '../../components/Work-from-home/WorkFromHome.module.css'
import {security} from '../../constants/index'
import Point from '../../components/Points/point'



export default function FocalPoints() {
// console.log(security)
  return (
<>
<HeaderLogin/>
<div className={styles.info}>
<div className={styles.sectionText}>
<h1 className={styles.h2}>PA OSHA CONSULTATION FOCAL POINTS SERIES</h1>
<p className={styles.p}>The Pennsylvania OSHA Consultation Program developed this series of videos focusing on the top 25 areas identified by the Occupational Safety and Health Administration during inspections.  The video series can be used to supplement training that employers must provide to their employees.  The video series includes 25 videos that are available to help both employees and employers.</p>

<p className={styles.p}>Focal Points Series</p>
{
   security.map(s=><Point s={s} key={s.id}/>)
}
</div>
</div>      
    </>
  )
}
