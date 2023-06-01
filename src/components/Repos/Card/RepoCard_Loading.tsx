import React, { FC } from 'react'
import styles from './RepoCard.module.css'
import EyeIcon from '@mui/icons-material/Visibility';
import ForkIcon from '@mui/icons-material/ForkRight';
import { Skeleton } from '@mui/material';

type Props = {}

const LoadingRepoCard: FC<Props> = () => {

    const numOfLangs = Math.ceil(Math.random() * 5)
    const animationType = "pulse"

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <Skeleton animation={"wave"} variant='text' />
                <Skeleton animation={"wave"} variant='text' />
            </div>
            <div className={styles.langs}>
                {
                    Array.from({ length: numOfLangs }).map(lang => (
                        <div className={styles.lang}>
                            <Skeleton animation={animationType} variant='text' />
                        </div>
                    ))
                }
            </div>
            <div className={styles.numbers}>
                <div>
                    <ForkIcon className={styles.icon} /> 
                    <Skeleton animation={animationType} variant='circular' />
                </div>
                <div> 
                    <EyeIcon className={styles.icon} />
                    <Skeleton animation={animationType} variant='circular' />
                </div>
            </div>
        </div>
    )
}

export default LoadingRepoCard