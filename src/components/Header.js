'use client'

import * as React from 'react';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    MenuItem,
} from '@mui/material'

import { useTheme } from '@mui/material/styles';

const pages = ['HOME', 'SOBRE', 'HABILIDADES', 'PROJETOS', 'CONTATO']

const Header = () => {

    const theme = useTheme()

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static">
                <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" component="span">
                                Gustavo
                            </Typography>
                            <Typography variant="h5" component="span" sx={{ marginX: '10px' }}>
                                |
                            </Typography>
                            <Typography variant="h5" component="span" sx={{ color: theme.palette.secondary.main }}>
                                Dev
                            </Typography>
                        </Box>
                        {
                            pages.map(page => (
                                <MenuItem key={page}>
                                    <Typography>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header