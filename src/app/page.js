'use client'

import Header from "@/components/Header";

import { useTheme } from '@mui/material/styles';

import {
  Box,
  Button,
  Container,
  Typography
} from '@mui/material'

export default function Home() {

  const theme = useTheme()

  return (
    <>
      <Header />     

      <Container component='section' maxWidth='md' sx={{ paddingY: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center'}}>
          <Typography component='h1' variant='h3' sx={{ fontWeight: 'bold' }}>
            GUSTAVO BODZIAK
          </Typography>

          <Typography component='span' sx={{ color: '#EAB308', display: 'block', marginY: '18px'}}>
            Estudante | Next.js · React · Node · MongoDB
          </Typography>

          <Typography component='p' sx={{ color: theme.palette.text.secondary, width: '470px', margin: '0 auto', lineHeight: '28px' }}>
            There are many variations of passages ofLorem Ipsum
            available, but the majority havesuffered alteration in some
            form, by injected humour,
          </Typography>

          <Button size='large' sx={{ backgroundColor: theme.palette.secondary.main, textTransform: 'none', fontWeight: '400', marginTop: '20px' }}>
            Projetos
          </Button>
        </Box>
      </Container>

    </>
  );
}
