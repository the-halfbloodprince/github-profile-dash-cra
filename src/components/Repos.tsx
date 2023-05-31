import React, { FC } from 'react'
import { Repo } from '../models/GitHub'
import styles from './Repos.module.css'
import { Stack } from '@mui/material'
import RepoCard from './RepoCard'

type Props = {
    repos: Repo[]
}

const Repos:FC<Props> = ({ repos }) => {
  return (
    <div className={styles.repos_grid}>
        {
            repos.map(repo => (
                <RepoCard repo={repo} />
            ))
        }
    </div>
  )
}

export default Repos