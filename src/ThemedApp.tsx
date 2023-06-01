import { useState } from "react"
import { ThemeProvider } from '@mui/material'
import { useMaterialTheme } from "./hooks/useMaterialTheme"
import App from "./App"

function ThemedApp() {
    
    const [darkModeEnabled, setDarkModeEnabled] = useState(true)
    const theme = useMaterialTheme(darkModeEnabled)

    const themeToggler = () => setDarkModeEnabled(!darkModeEnabled)

    return (
        <ThemeProvider theme={theme}>
            <App darkModeEnabled={darkModeEnabled} themeToggler={themeToggler} />
        </ThemeProvider>
    )
}

export default ThemedApp