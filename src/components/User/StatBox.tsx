import React, { FC } from 'react'
import { Stack, Typography, useTheme, alpha } from '@mui/material'
import styles from './StatBox.module.css'

type Props = {
    stat: number
    of: string
}

const StatBox: FC<Props> = ({ stat, of }) => {
  
    const theme = useTheme()
  
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'.6rem'}
            sx={{
                fontSize: '1.2rem',
                boxShadow: `${theme.palette.text.primary} 2px 2px 1px`,
                borderRadius: '8px',
                padding: '.8rem 1rem',
                fontWeight: 600,
                background: alpha(theme.palette.background.paper, .2),
                color: alpha(theme.palette.text.primary, .5), 
            }} 
            // className={styles.followerCount}
        >
                { of }: 
                <Typography sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary
                }}>
                    { stat } 
                </Typography> 
        </Stack>
  )
}

export default StatBox