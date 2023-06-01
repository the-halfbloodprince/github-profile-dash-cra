import React, { FC } from 'react'
import { Repo } from '../../models/GitHub'
import styles from './Repos.module.css'
import RepoCard from './Card/RepoCard'

type Props = {
    repos: Repo[]
}

const Repos:FC<Props> = ({ repos }) => {
  return (
    <div className={styles.repos_grid}>
        {
            repos.map(repo => (
                <RepoCard repo={repo} key={repo.id} />
            ))
        }
    </div>
  )
}

export default Repos