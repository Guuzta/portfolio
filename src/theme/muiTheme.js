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
            main: '#EAB308',
            hover: '#d38609ff'
        },
        text: {
            primary: '#000000',
            secondary: '#6B7280'
        },
        background: {
            card: '#0B0B0B'
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