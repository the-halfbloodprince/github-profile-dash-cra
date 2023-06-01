import { useTheme, Typography } from '@mui/material'
import styles from './NoUser.module.css'

const NoUser = () => {

    const theme = useTheme()

    return (
        <Typography 
            variant='h1'
            fontSize={{
                xs: '4rem',
                md: '6rem'
            }}
            className={styles.noUser} 
            sx={{
                textAlign: 'center',
                color: theme.palette.primary.main,
                fontWeight: 500
            }}
        >
            Enter your GitHub username and hit Enter
        </Typography>
    )
}

export default NoUser