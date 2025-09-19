'use client'

import Header from "@/components/Header";

import { useTheme } from '@mui/material/styles';

import {
  Box,
  Button,
  Container,
  Card,
  Typography
} from '@mui/material'

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

export default function Home() {

  const theme = useTheme()

  return (
    <>
      <Header />

      <Container component='section' maxWidth='md' sx={{ paddingY: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center' }}>
          <Typography component='h1' variant='h3' sx={{ fontWeight: 'bold' }}>
            GUSTAVO BODZIAK
          </Typography>

          <Typography component='span' sx={{ color: '#EAB308', display: 'block', marginY: '18px' }}>
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

      <Container component='section' maxWidth={false} sx={{ paddingY: '96px', backgroundColor: theme.palette.primary.main }}>
        <Container component='div' maxWidth='lg'>
          <Typography component='h2' sx={{ marginBottom: '30px' }}>
            <Typography component='span' variant='h3'
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '42px',
                marginRight: '15px',
                display: 'inline-block'
              }}
            >
              Sobre
            </Typography>
            <Typography component='span' variant='h3'
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 'bold',
                fontSize: '42px'
              }}>
              Mim
            </Typography>
          </Typography>

          <Typography component='p'
            sx={{
              marginBottom: '15px',
              color: theme.palette.text.secondary,
              width: '470px',
              lineHeight: '28px'
            }}>
            There are many variations of passages ofLorem Ipsum
            available, but the majority havesuffered alteration in some
            form, by injected humour,
          </Typography>

          <Typography component='p'
            sx={{
              color: theme.palette.text.secondary,
              width: '470px',
              lineHeight: '28px'
            }}>
            Passages ofLorem Ipsumavailable, but the majority havesuffered
            alteration in some form, by injected humour,
          </Typography>

          <Box component='div'>
            <Button size='large'
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                textTransform: 'none',
                fontWeight: '400',
                marginTop: '30px',
                marginRight: '30px'
              }}>
              Contato
            </Button>

            <Button size='large'
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                textTransform: 'none',
                fontWeight: '400',
                marginTop: '30px'
              }}>
              Currículo
            </Button>
          </Box>
        </Container>
      </Container>

      <Container component='section' maxWidth='lg' sx={{ paddingY: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center' }}>
          <Typography component='h1' variant='h3'
            sx={{
              fontWeight: 'bold',
              fontSize: '42px',
              marginBottom: '30px'
            }}
          >
            Habilidades
          </Typography>

          <Typography component='p' sx={{ color: theme.palette.text.secondary, width: '470px', margin: '0 auto', lineHeight: '28px' }}>
            There are many variations of passages ofLorem Ipsum
            available, but the majority havesuffered alteration in some
            form, by injected humour,
          </Typography>
        </Box>

        <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '56px' }}>
          <Card 
            sx={{ backgroundColor: theme.palette.background.card, 
                  textAlign: 'center',
                  padding: '32px',
                  width: '50% ',
                  borderRadius: '10px'
            }}
          >
            <RiNextjsFill size={50} color={theme.palette.secondary.main}/>

            <Typography component='h3' 
              sx={{ color: 'white', 
                    fontSize: 26, 
                    fontWeight: 'bold', 
                    marginBottom: '12px' 
              }}
            >
              Next.js
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary,  margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Card>

           <Card 
            sx={{ backgroundColor: theme.palette.background.card, 
                  textAlign: 'center',
                  padding: '32px',
                  width: '50% ',
                  marginX: '30px',
                  borderRadius: '10px'
            }}
          >
            <FaReact size={50} color={theme.palette.secondary.main}/>

            <Typography component='h3' 
              sx={{ color: 'white', 
                    fontSize: 26, 
                    fontWeight: 'bold', 
                    marginBottom: '12px' 
              }}
            >
              React
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary,  margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Card>

           <Card 
            sx={{ backgroundColor: theme.palette.background.card, 
                  textAlign: 'center',
                  padding: '32px',
                  width: '50% ',
                  borderRadius: '10px'
            }}
          >
            <FaNodeJs size={50} color={theme.palette.secondary.main}/>

            <Typography component='h3' 
              sx={{ color: 'white', 
                    fontSize: 26, 
                    fontWeight: 'bold', 
                    marginBottom: '12px' 
              }}
            >
              Node
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary,  margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Card>
        </Box>
      </Container>

    </>
  );
}
