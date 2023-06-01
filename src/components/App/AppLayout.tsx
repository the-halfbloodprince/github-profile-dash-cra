import React, { FC } from 'react'
import { Box, useTheme } from '@mui/material'

type Props = {
    children: React.ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  
    const theme = useTheme()
    
    return (
        <Box 
            className="App"
            sx={{
            background: theme.palette.background.default,
            minHeight: '100svh',
            width: '100%',
            padding: '5rem 10vw',
            color: theme.palette.text.primary
        }}>
            { children }
        </Box>
  )
}

export default AppLayout