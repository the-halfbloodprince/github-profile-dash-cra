import React, { FC } from 'react'
import styles from './RepoCard.module.css'
import { Repo } from '../models/GitHub'
import Tooltip from '@mui/material/Tooltip'
import EyeIcon from '@mui/icons-material/Visibility';
import ForkIcon from '@mui/icons-material/ForkRight';

type Props = {
    repo: Repo
}

const RepoCard: FC<Props> = ({ repo: { 
    name, 
    description, 
    forks_count: forkCount, 
    watchers_count: watcherCount,
    html_url,
    languages 
} }) => {
  return (
    <div className={styles.main}>
        <a href={html_url} target='_blank'>
            <div className={styles.left}>
                <h1> {name} </h1>
                <p> {description} </p>
            </div>
            <div className={styles.langs}>
                {
                    languages.map(lang => (
                        <div className={styles.lang}>
                            {lang.name}
                        </div>
                    ))
                }
            </div>
            <div className={styles.numbers}>
                <div>
                    <ForkIcon className={styles.icon} /> 
                    <div>{forkCount}</div>
                </div>
                <div> 
                    <EyeIcon className={styles.icon} />
                    <div>{watcherCount}</div> 
                </div>
            </div>
        </a>
    </div>
  )
}

export default RepoCard