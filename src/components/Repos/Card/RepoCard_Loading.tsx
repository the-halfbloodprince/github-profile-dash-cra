import React, { FC } from 'react'
import styles from './RepoCard.module.css'
import EyeIcon from '@mui/icons-material/Visibility';
import ForkIcon from '@mui/icons-material/ForkRight';
import { Skeleton, Paper, useTheme } from '@mui/material';

type Props = {}

const LoadingRepoCard: FC<Props> = () => {

    const theme = useTheme()

    const numOfLangs = Math.ceil(Math.random() * 5)
    const animationType = "pulse"

    return (
        <Paper
         className={styles.main}
         sx={{
            borderRadius: '16px',
            border: 'solid 3px transparent',
            transition: 'all .2s ease'            
         }}
        >
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
        </Paper>
    )
}

export default LoadingRepoCard