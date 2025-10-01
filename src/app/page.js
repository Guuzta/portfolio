'use client'

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";

import { useTheme } from '@mui/material/styles';

import {
  Box,
  Button,
  Container,
  Card,
  CardMedia,
  Grid,
  Typography,
  Link as MuiLink,
} from '@mui/material'

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdLaunch } from "react-icons/md";

export default function Home() {

  const theme = useTheme()

  return (
    <>
      <Header />

      <Container id='Home' component='section' maxWidth='md' sx={{ paddingTop: '160px', paddingBottom: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center' }}>
          <Typography component='h1' variant='h2' sx={{ fontWeight: 'bold' }}>
            GUSTAVO BODZIAK
          </Typography>

          <Typography component='span' variant='h6' sx={{ color: '#EAB308', display: 'block', marginY: '18px' }}>
            Estudante | Next.js · React · Node · MongoDB
          </Typography>

          <Typography component='p' variant='h6' sx={{ color: theme.palette.text.secondary, fontWeight: '400' }}>
            Tenho experiência desenvolvendo aplicações web completas, utilizando Next.js no Frontend para criar interfaces modernas, responsivas e intuitivas, garantindo uma ótima experiência para o usuário. No Backend, trabalho com Node.js e MongoDB, implementando a lógica das aplicações, cuidando da estrutura de dados e garantindo que tudo funcione de forma integrada e eficiente.
          </Typography>

          <Link href='/#Projetos'>
            <Button size='large'
              sx={{
                backgroundColor: theme.palette.secondary.main,
                textTransform: 'none',
                fontSize: '17px',
                paddingY: '15px',
                paddingX: '20px',
                marginTop: '40px',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.hover,
                  transition: 'all 300ms ease'
                }
              }}
            >
              PROJETOS
            </Button>
          </Link>

        </Box>
      </Container>

      <Container id='Sobre' component='section' maxWidth={false} sx={{ paddingY: '96px', backgroundColor: theme.palette.primary.main }}>
        <Container component='div' maxWidth='lg'>
          <Typography component='h2' sx={{ marginBottom: '30px' }}>
            <Typography component='span' variant='h3'
              sx={{
                color: 'white',
                fontWeight: 'bold',
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
              }}>
              Mim
            </Typography>
          </Typography>

          <Typography component='p' variant='h6'
            sx={{
              fontWeight: '400',
              marginBottom: '15px',
              color: theme.palette.text.secondary,
              lineHeight: '28px'
            }}>
            Sou estudante de Análise e Desenvolvimento de Sistemas e estou dando meus primeiros passos no mercado de tecnologia, em busca da minha primeira oportunidade.
          </Typography>

          <Typography component='p' variant='h6'
            sx={{
              fontWeight: '400',
              marginBottom: '15px',
              color: theme.palette.text.secondary,
              lineHeight: '28px'
            }}>
            Sou apaixonado por construir soluções completas e estou constantemente expandindo meus conhecimentos para me tornar um desenvolvedor. Estou aberto a oportunidades em que eu possa contribuir, aprender e crescer.
          </Typography>

          <Typography component='p' variant='h6'
            sx={{
              fontWeight: '400',
              marginBottom: '15px',
              color: theme.palette.text.secondary,
              lineHeight: '28px'
            }}>
            Para conhecer mais sobre minha experiência, habilidades e projetos, você pode conferir meu currículo completo no botão abaixo, onde reuni detalhes sobre minhas experiências práticas, tecnologias que domino e resultados alcançados em pequenos projetos web.
          </Typography>

          <Box component='div'>
            <Button size='large'
              sx={{
                color: 'white',
                backgroundColor: theme.palette.secondary.main,
                textTransform: 'none',
                fontSize: '17px',
                fontWeight: '400',
                paddingY: '15px',
                paddingX: '20px',
                marginTop: '40px',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.hover,
                  transition: 'all 300ms ease'
                }
              }}
            >
              CURRÍCULO
            </Button>
          </Box>
        </Container>
      </Container>

      <Container id='Habilidades' component='section' maxWidth='lg' sx={{ paddingY: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center' }}>
          <Typography component='h1' variant='h3'
            sx={{
              fontWeight: 'bold',
              marginBottom: '30px'
            }}
          >
            Habilidades
          </Typography>

          <Typography component='p' variant='h6' sx={{ color: theme.palette.text.secondary, margin: '0 auto', lineHeight: '28px', fontWeight: '400' }}>
            Algumas das tecnologias que fazem parte da minha trajetória e que sigo desenvolvendo constantemente.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: '56px' }}>

          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <SkillCard
              Icon={RiNextjsFill}
              title='Next.js'
              text='Experiência no desenvolvimento de aplicações modernas com foco em performance, SEO e renderização híbrida (SSR/SSG).'
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <SkillCard
              Icon={FaReact}
              title='React'
              text='Criação de interfaces dinâmicas e componentizadas, garantindo escalabilidade e boa experiência do usuário.'
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <SkillCard
              Icon={FaNodeJs}
              title='Node'
              text='Desenvolvimento de APIs e backends eficientes, com foco em performance e integração entre serviços.'
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <SkillCard
              Icon={FaGitAlt}
              title='Git'
              text='Controle de versão e colaboração em equipe, utilizando boas práticas de branchs e versionamento de código.'
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <SkillCard
              Icon={SiPostman}
              title='Postman'
              text='Testes, validação e documentação de APIs REST, facilitando a integração entre frontend e backend.'
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <SkillCard
              Icon={IoLogoJavascript}
              title='JavaScript'
              text='Conhecimento prático da linguagem para construir aplicações interativas, tanto no frontend quanto no backend.'
            />
          </Grid>

        </Grid>
      </Container>

      <Container id='Projetos' component='section' maxWidth={false} sx={{ paddingY: '96px', backgroundColor: theme.palette.primary.main }}>
        <Container component='div' maxWidth='lg'>

          <Box component='div' sx={{ textAlign: 'center' }}>
            <Typography component='h2' sx={{ marginBottom: '30px' }}>
              <Typography component='span' variant='h3'
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
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
                }}>
                Projetos
              </Typography>
            </Typography>

            <Typography component='p' variant='h6' sx={{ color: theme.palette.text.secondary, margin: '0 auto', lineHeight: '28px', fontWeight: '400' }}>
              Aqui você encontrará alguns projetos que criei ao longo da minha jornada de estudos e aprendizado.
            </Typography>
          </Box>

          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginY: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component='img'
              height="290"
              image="/images/primeiroProjeto.png"
              title="notebook"
              sx={{ width: 'fit-content' }}
            />

            <Box sx={{ textAlign: 'center',  paddingY: '0', marginTop: '40px' }}>
              <Typography component='h3'
                sx={{
                  color: 'white',
                  fontSize: '35px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Contador de Cliques
              </Typography>

              <Typography component='p' sx={{ color: theme.palette.text.secondary, fontSize: '18px' }}>
                Plataforma onde consiste basicamente em registrar o maior número de cliques feito pelo usuário.
              </Typography>


              <Link href='/contador-de-cliques' target='_blank'>
                <Button size='large'
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    marginTop: '30px',
                    fontSize: '14px',
                    gap: '5px',
                    padding: '15px',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.hover,
                      transition: 'all 300ms ease'
                    }
                  }}
                >
                  <MdLaunch size={25} />
                  PROJETO
                </Button>
              </Link>
            </Box>
          </Card>

        </Container>

      </Container>

      <Container id='Contato' component='section' maxWidth='lg' sx={{ paddingY: '96px' }}>
        <Box component='div' sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h3'
            sx={{
              fontWeight: 'bold',
              marginBottom: '30px'
            }}
          >
            Contato
          </Typography>

          <Typography component='p' sx={{ color: theme.palette.text.secondary, fontSize: '18px' }}>
            Se quiser entrar em contato ou conhecer mais sobre meu trabalho, fique à vontade para me chamar no LinkedIn ou dar uma olhada nos meus projetos no GitHub.
          </Typography>
        </Box>


        <Box component='nav' display='flex' alignItems='center' justifyContent='center' gap='50px' sx={{ marginTop: '56px' }}>

          <MuiLink
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
          </MuiLink>

          <MuiLink
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
          </MuiLink>
        </Box>

      </Container>

      <Footer />
    </>
  );
}
