import React, { FC } from 'react'
import styles from './RepoCard.module.css'
import { Repo } from '../../../models/GitHub'
import { Paper, useTheme, alpha } from '@mui/material'
import EyeIcon from '@mui/icons-material/Visibility';
import ForkIcon from '@mui/icons-material/ForkRight';
import { trim } from '../../../utils/textUtils';

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

    const theme = useTheme()
  
    return (
        <Paper
         className={styles.main}
         sx={{
            borderRadius: '16px',
            border: 'solid 3px transparent',
            transition: 'all .2s ease',
            '&:hover': {
                background: "#ffffff44",
                translate: '-5px -5px',
                // border: `solid 3px ${theme.palette.text.primary}`,
                boxShadow: `${theme.palette.text.primary} 5px 5px`
            }            
         }}
        >
            <a href={html_url} target='_blank'>
                <div className={styles.left}>
                    <h1> { trim(name) } </h1>
                    <p> {description} </p>
                </div>
                <div className={styles.langs}>
                    {
                        languages.map(lang => (
                            <div className={styles.lang} key={lang.name}>
                                {lang.name}
                            </div>
                        ))
                    }
                </div>
                <div className={styles.numbers}>
                    <div>
                        <ForkIcon sx={{
                            
                        }} /> 
                        <div>{forkCount}</div>
                    </div>
                    <div> 
                        <EyeIcon sx={{
                            
                        }} />
                        <div>{watcherCount}</div> 
                    </div>
                </div>
            </a>
        </Paper>
    )
}

export default RepoCard