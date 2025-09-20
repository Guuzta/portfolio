'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useTheme } from '@mui/material/styles';

import {
  Box,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link
} from '@mui/material'

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
            sx={{
              backgroundColor: theme.palette.background.card,
              textAlign: 'center',
              padding: '32px',
              width: '50% ',
              borderRadius: '10px'
            }}
          >
            <RiNextjsFill size={50} color={theme.palette.secondary.main} />

            <Typography component='h3'
              sx={{
                color: 'white',
                fontSize: 26,
                fontWeight: 'bold',
                marginBottom: '12px'
              }}
            >
              Next.js
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary, margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Card>

          <Card
            sx={{
              backgroundColor: theme.palette.background.card,
              textAlign: 'center',
              padding: '32px',
              width: '50% ',
              marginX: '30px',
              borderRadius: '10px'
            }}
          >
            <FaReact size={50} color={theme.palette.secondary.main} />

            <Typography component='h3'
              sx={{
                color: 'white',
                fontSize: 26,
                fontWeight: 'bold',
                marginBottom: '12px'
              }}
            >
              React
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary, margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Card>

          <Card
            sx={{
              backgroundColor: theme.palette.background.card,
              textAlign: 'center',
              padding: '32px',
              width: '50% ',
              borderRadius: '10px'
            }}
          >
            <FaNodeJs size={50} color={theme.palette.secondary.main} />

            <Typography component='h3'
              sx={{
                color: 'white',
                fontSize: 26,
                fontWeight: 'bold',
                marginBottom: '12px'
              }}
            >
              Node
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary, margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Card>
        </Box>
      </Container>

      <Container component='section' maxWidth={false} sx={{ paddingY: '96px', backgroundColor: theme.palette.primary.main }}>
        <Container component='div' maxWidth='lg'>
          <Box component='div' sx={{ textAlign: 'center' }}>
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
                Meus
              </Typography>
              <Typography component='span' variant='h3'
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 'bold',
                  fontSize: '42px'
                }}>
                Projetos
              </Typography>
            </Typography>

            <Typography component='p' sx={{ color: theme.palette.text.secondary, width: '700px', margin: '0 auto', lineHeight: '28px' }}>
              There are many variations of passages ofLorem Ipsum
              available, but the majority havesuffered alteration in some
              form, by injected humour,
            </Typography>
          </Box>

          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginTop: '100px', marginBottom: '180px', display: 'flex', justifyContent: 'space-between' }}>
            <CardMedia
              component='img'
              height="250"
              image="/images/notebook.png"
              title="green iguana"
              sx={{ width: 'fit-content' }}
            />

            <CardContent sx={{ width: '50%' }}>
              <Typography component='h3'
                sx={{
                  color: 'white',
                  fontSize: 26,
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Projeto de exemplo
              </Typography>

              <Typography component='p' sx={{ color: theme.palette.text.secondary, lineHeight: '28px' }}>
                There are many variations of passages ofLorem Ipsum
                available, but the majority havesuffered alteration in some
                form, by injected humour,
              </Typography>

              <Button size='large'
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: '400',
                  marginTop: '30px'
                }}>
                Estudo de caso
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginY: '180px', display: 'flex', justifyContent: 'space-between' }}>
            <CardMedia
              component='img'
              height="250"
              image="/images/notebook.png"
              title="green iguana"
              sx={{ width: 'fit-content' }}
            />

            <CardContent sx={{ width: '50%' }}>
              <Typography component='h3'
                sx={{
                  color: 'white',
                  fontSize: 26,
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Projeto de exemplo
              </Typography>

              <Typography component='p' sx={{ color: theme.palette.text.secondary, lineHeight: '28px' }}>
                There are many variations of passages ofLorem Ipsum
                available, but the majority havesuffered alteration in some
                form, by injected humour,
              </Typography>

              <Button size='large'
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: '400',
                  marginTop: '30px'
                }}>
                Estudo de caso
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginY: '180px', display: 'flex', justifyContent: 'space-between' }}>
            <CardMedia
              component='img'
              height="250"
              image="/images/notebook.png"
              title="green iguana"
              sx={{ width: 'fit-content' }}
            />

            <CardContent sx={{ width: '50%' }}>
              <Typography component='h3'
                sx={{
                  color: 'white',
                  fontSize: 26,
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Projeto de exemplo
              </Typography>

              <Typography component='p' sx={{ color: theme.palette.text.secondary, lineHeight: '28px' }}>
                There are many variations of passages ofLorem Ipsum
                available, but the majority havesuffered alteration in some
                form, by injected humour,
              </Typography>

              <Button size='large'
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: '400',
                  marginTop: '30px'
                }}>
                Estudo de caso
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginTop: '180px', display: 'flex', justifyContent: 'space-between' }}>
            <CardMedia
              component='img'
              height="250"
              image="/images/notebook.png"
              title="green iguana"
              sx={{ width: 'fit-content' }}
            />

            <CardContent sx={{ width: '50%' }}>
              <Typography component='h3'
                sx={{
                  color: 'white',
                  fontSize: 26,
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Projeto de exemplo
              </Typography>

              <Typography component='p' sx={{ color: theme.palette.text.secondary, lineHeight: '28px' }}>
                There are many variations of passages ofLorem Ipsum
                available, but the majority havesuffered alteration in some
                form, by injected humour,
              </Typography>

              <Button size='large'
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: '400',
                  marginTop: '30px'
                }}>
                Estudo de caso
              </Button>
            </CardContent>
          </Card>

        </Container>

      </Container>

      <Container component='section' maxWidth='lg' sx={{ paddingY: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h3'
            sx={{
              fontWeight: 'bold',
              fontSize: '42px',
              marginBottom: '30px'
            }}
          >
            Contato
          </Typography>

          <Typography component='p' sx={{ color: theme.palette.text.secondary, width: '470px', margin: '0 auto', lineHeight: '28px' }}>
            There are many variations of passages ofLorem Ipsum
            available, but the majority havesuffered alteration in some
            form, by injected humour,
          </Typography>
        </Box>


        <Box component='nav' display='flex' alignItems='center' justifyContent='center' gap='50px' sx={{ marginTop: '56px' }}>

          <Link
            href='https://www.linkedin.com/in/gustavobodziak/'
            target='_blank'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              "&:hover": {
                "& .MuiTypography-root": {
                  color: '#0077B5'
                }
              }
            }}
          >
            <FaLinkedin size={30} color='#0077B5' />

            <Typography component='span' sx={{ transition: 'all 300ms ease', color: theme.palette.text.secondary }}>
              Linkedin
            </Typography>
          </Link>

          <Link
            href='https://github.com/Guuzta'
            target='_blank'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              "&:hover": {
                "& .MuiTypography-root": {
                  color: 'black'
                }
              }
            }}
          >
            <FaGithub size={30} />

            <Typography component='span' sx={{ transition: 'all 300ms ease', color: theme.palette.text.secondary }}>
              GitHub
            </Typography>
          </Link>
        </Box>

      </Container>

      <Footer/>
    </>
  );
}
