import React from 'react'
import Select from 'react-select'
import styles from '../../jobs/jobs.module.css'

export default function States({states,setStateId}) {
  return (
    <>
        <Select
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
            options={states}
            instanceId="states"
            placeholder="Filter by state"
            isClearable
            onChange={value => setStateId(value ? value.id : null)}
          />
    </>
  )
}
