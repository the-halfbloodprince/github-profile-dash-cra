import React, { FC } from 'react'
import styles from './RepoCard.module.css'
import { Repo } from '../models/GitHub'
import Tooltip from '@mui/material/Tooltip'
import EyeIcon from '@mui/icons-material/Visibility';
import ForkIcon from '@mui/icons-material/ForkRight';
import { Skeleton } from '@mui/material';

type Props = {}

const LoadingRepoCard: FC<Props> = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <Skeleton animation="wave" variant='text' />
            <Skeleton animation="wave" variant='text' />
        </div>
        <div className={styles.langs}>
            {
                Array.from({ length: 5 }).map(lang => (
                    <div className={styles.lang}>
                        <Skeleton animation="wave" variant='text' />
                    </div>
                ))
            }
        </div>
        <div className={styles.numbers}>
            <div>
                <ForkIcon className={styles.icon} /> 
                <Skeleton animation="wave" variant='circular' />
            </div>
            <div> 
                <EyeIcon className={styles.icon} />
                <Skeleton animation="wave" variant='circular' />
            </div>
        </div>
    </div>
  )
}

export default LoadingRepoCard