import React, { FC } from 'react'
import styles from './Header.module.css'
import { Stack, Typography, TextField, useTheme } from '@mui/material'
import ThemeIcon from '../ThemeIcon'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SubmitHandlers } from '../../models/Component_DTOs';

type Props = {
    darkModeEnabled: boolean
    themeToggler: () => void
    usernameInputRef: React.RefObject<HTMLInputElement>
    usernameSubmitHandlers: SubmitHandlers
    isTyping: boolean
    // handleUsernameSubmit_onChange: React.ChangeEventHandler<HTMLInputElement>
    // handleUsernameSubmit_onKBDEnter: React.KeyboardEventHandler<HTMLInputElement>
}

const Header: FC<Props> = ({ 

    darkModeEnabled, 
    themeToggler, 
    usernameInputRef,
    usernameSubmitHandlers,
    isTyping

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

            <div className={styles.input_wrapper}>
                {/* input element */}
                <TextField
                    inputRef={usernameInputRef}
                    onKeyDown={usernameSubmitHandlers.onKBDAction}
                    onChange={usernameSubmitHandlers.onChange}
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
                <div className={`${styles.typing__indicator} ${isTyping ? styles.typing : ""}`}>
                    <div className={styles.load}></div>
                    <div className={styles.load}></div>
                    <div className={styles.load}></div>
                </div>
            </div>
        </div>

    )
}

export default Header