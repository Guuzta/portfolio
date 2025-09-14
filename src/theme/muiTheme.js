'use client'

import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles'

import { CssBaseline } from '@mui/material'

import { lexendDeca } from './fonts'

const theme = createTheme({
    typography: {
        fontFamily: lexendDeca.style.fontFamily
    },
    palette: {
        primary:{
            main: '#111111'
        },
        secondary: {
            main: '#f9d029'
        }
    }
})

const MuiThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default MuiThemeProvider