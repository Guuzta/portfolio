'use client'

import { useState } from 'react';

import Link from 'next/link';

import {
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const pages = ['Home', 'Sobre', 'Habilidades', 'Projetos', 'Contato']

    const SectionList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {
                    pages.map(page => {
                            const pageCapital = page.toUpperCase()

                            return (
                                <Link href={`/#${page}`} key={page}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={pageCapital} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            )
                        }
                    )
                }
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: 'white', fontSize: '35px' }} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {SectionList}
            </Drawer>
        </div>
    );
}

export default Sidebar