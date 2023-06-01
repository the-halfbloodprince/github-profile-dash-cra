import React, { FC } from 'react'
import styles from './Repos.module.css'
import LoadingRepoCard from './Card/RepoCard_Loading'

type Props = {
    count: number
}

const LoadingRepos:FC<Props> = ({ count }) => {
  return (
    <div className={styles.repos_grid}>
        {
            Array.from({length: count}).map(repo => (
                <LoadingRepoCard />
            ))
        }
    </div>
  )
}

export default LoadingRepos