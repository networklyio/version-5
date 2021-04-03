import React from 'react'
import Link from 'next/link'
import styles from '../../components/Work-from-home/WorkFromHome.module.css'
import {security} from '../../constants/index'

export default function Point({s}) {
  return (
    <>
    <h2 className={styles.h2}>
      <Link href="/focal-points/[id]" as={`/focal-points/${s.slug}`} > 
       <a href="#" >{s.title}</a>
      </Link> 
      </h2>
      <p className={styles.p} key={s.slug+'pd'}>{s.description}</p>
    </>)
  
}
