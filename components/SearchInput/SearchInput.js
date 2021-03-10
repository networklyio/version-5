import React from 'react'
import styles from '../SearchInput/SearchInput.module.css'
import SearchRounded from "@material-ui/icons/SearchRounded"

export default function SearchInput({ ...rest }) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} type="text" placeholder="Search by " {...rest} />
    </div>
  )
}
