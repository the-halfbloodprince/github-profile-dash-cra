import React, { FC } from 'react'
import { Repo } from '../models/GitHub'
import styles from './Repos.module.css'
import { Stack } from '@mui/material'
import RepoCard from './RepoCard'
import LoadingRepoCard from './RepoLoading'

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