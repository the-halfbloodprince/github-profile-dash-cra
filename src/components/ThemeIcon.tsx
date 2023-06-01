import { FC } from 'react'
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type Props = {
    darkMode: boolean
    onClick: () => void
}

const ThemeIcon: FC<Props> = ({ darkMode, onClick: clickHandler }) => {
  
    const theme = useTheme()

    return (
        <div onClick={() => clickHandler()}>
        { darkMode ? 
            <DarkModeIcon sx={{
                color: theme.palette.primary.main,
                fontSize: '3rem',
                marginRight: '1rem'
            }} /> : 
            <LightModeIcon sx={{
                color: theme.palette.primary.main,
                fontSize: '3rem',
                marginRight: '1rem'
            }} /> }
        </div>
    )
}

export default ThemeIcon