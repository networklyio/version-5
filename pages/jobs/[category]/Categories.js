import React from 'react'
import Select from 'react-select'
import styles from '../../jobs/jobs.module.css'


export default function Categories({categories, setCategoryId}) {
  return (
    <>
     <Select getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
              options={categories} instanceId="categories" placeholder="Filter by category"
              isClearable
              onChange={value => setCategoryId(value ? value.id : null)} className={styles.filtro}/> 
    </>
  )
}
