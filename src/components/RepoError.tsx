import React, { FC } from 'react'
import styles from './UserDataError.module.css'

type Props = {}

const RepoError: FC<Props> = () => {
  return (
    <div className={styles.not_found__main}>
      <h1>Couldn't fetch User Details</h1>
    </div>
  )
}

export default RepoError