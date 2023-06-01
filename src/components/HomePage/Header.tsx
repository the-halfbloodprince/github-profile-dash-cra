import React, { FC } from 'react'
import styles from './Header.module.css'
import { Stack, Typography, TextField, useTheme } from '@mui/material'
import ThemeIcon from '../ThemeIcon'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type Props = {
    darkModeEnabled: boolean
    themeToggler: () => void
    usernameInputRef: React.RefObject<HTMLInputElement>
    handleUsernameSubmit: React.KeyboardEventHandler<HTMLDivElement>
}

const Header: FC<Props> = ({ 

    darkModeEnabled, 
    themeToggler, 
    usernameInputRef,
    handleUsernameSubmit

}) => {

    const theme = useTheme()

    return (
        <div className={styles.input__section}>
            <Stack
                direction={'row'}
                alignItems={'center'}
            >
                <ThemeIcon darkMode={darkModeEnabled} onClick={themeToggler} />
                <Typography 
                    variant='h1'
                    sx={{
                        fontSize: '3rem'
                    }}
                >
                    <div>
                        Your <b className={styles.github}>GitHub</b> <span>Username</span>
                    </div>
                </Typography> 
                <ArrowForwardIcon className={styles.arrow} />
            </Stack>

            {/* input element */}
            <TextField
                inputRef={usernameInputRef}
                onKeyDown={handleUsernameSubmit}
                autoFocus
                inputProps={{
                style: {
                    fontSize: '2.5rem',
                    outlineColor: 'transparent',
                    border: `solid ${theme.palette.primary.main} 5px`,
                }
                }}
                sx={{
                outline: 'transparent',
                border: 'none',
                }}
            />
            </div>
    )
}

export default Header