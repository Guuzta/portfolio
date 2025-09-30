'use client'

import * as React from 'react';

import Link from 'next/link';

import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    MenuItem,
} from '@mui/material'

import Sidebar from './Sidebar';

import { useTheme, useMediaQuery } from '@mui/material';

const Header = () => {

    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const pages = ['Home', 'Sobre', 'Habilidades', 'Projetos', 'Contato']

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="fixed">
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
                            isMobile ? (
                                <Sidebar />
                            ) : (
                                    pages.map(page => {

                                    const pageCapital = page.toUpperCase()

                                    return (
                                        <Link href={`/#${page}`} key={page}>
                                            <MenuItem
                                                sx={{
                                                    "&:hover": {
                                                        "& .MuiTypography-root": {
                                                            color: theme.palette.secondary.main
                                                        }
                                                    }
                                                }}
                                            >
                                                <Typography sx={{ transition: 'all 300ms ease' }}>
                                                    {pageCapital}
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    )
                                })
                            )

                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header