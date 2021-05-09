import React from 'react'
import Select from 'react-select'
import styles from '../../jobs/jobs.module.css'

export default function Items({setPerPage}) {

  const options = [
    { id: '5', name: '5' },
    { id: '10', name: '10' },
    { id: '15', name: '15' },
    { id: '20', name: '20' },
    { id: '25', name: '25' },
    { id: '50', name: '50' },
    { id: '100', name: '100' },
  ]

  return (
    <>
        <Select
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
            options={options}
            instanceId="options"
            placeholder="Items to see"
            isClearable
            onChange={value => setPerPage(value ? value.id : 5)}
            className={styles.filtro}
          />
    </>
  )
}
