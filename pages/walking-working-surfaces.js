import React from 'react'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import styles from '../components/Work-from-home/WorkFromHome.module.css'

export default function Point() {
  return (
    <>
 <HeaderLogin/>
<div className={styles.info}>
<div className={styles.sectionText}>
<h1 className={styles.h2}>Walking/Working Surfaces</h1>

<div className={styles.centro}>
<iframe className={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/2HBsTh8W7MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p className={styles.p}><a href="/">Aca va el link con el PDF</a></p>


</div>
</div>
    </>
  )
}
