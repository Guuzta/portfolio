'use client'

import { useTheme } from '@mui/material/styles';
import {
    Box,
    Container,
    Divider,
    Typography,
} from "@mui/material"

const Footer = () => {

    const theme = useTheme()

    return (
        <Box component='footer' sx={{ backgroundColor: theme.palette.primary.main, paddingTop: '96px', paddingBottom: '36px' }}>
            <Container maxWidth='lg'>
                <Typography component='span' variant='h5'
                    sx={{
                        display: 'block',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '20px'
                    }}
                >
                    GUSTAVO BODZIAK
                </Typography>

                <Typography component='p' variant='subtitle2' 
                    sx={{ 
                        color: theme.palette.text.secondary,  
                        lineHeight: '28px',
                        fontWeight: '400',
                        width: '50%' 
                    }}
                >
                    There are many variations of passages ofLorem Ipsum
                    available, but the majority havesuffered alteration in some
                    form, by injected humour,
                </Typography>

                <Divider sx={{ borderColor: '#333',  marginTop: '96px', marginBottom: '20px'}}/>

                <Typography component='span' variant='caption' sx={{ display: 'block', textAlign: 'center', color: 'white', fontWeight: '300', }}>
                    © Copyright 2025. Desenvolvido com NextJS ❤
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer