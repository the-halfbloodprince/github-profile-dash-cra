import React, { FC } from 'react'
import styles from './Repos_Error.module.css'

type Props = {}

const RepoError: FC<Props> = () => {
  return (
    <div className={styles.main}>
      <h1>Couldn't fetch User Details</h1>
    </div>
  )
}

export default RepoError