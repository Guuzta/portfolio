'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { useTheme } from '@mui/material/styles';

import {
    Button,
    Box,
    CardMedia,
    Card,
    Container,
    List,
    Link as MuiLink,
    ListItem,
    ListItemIcon,
    Typography,
} from "@mui/material"

import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Contador = () => {

    const theme = useTheme()

    return (
        <>
            <Header />

            <Container component='section' maxWidth='md' sx={{ paddingY: '96px' }}>
                <Box component='div' sx={{ textAlign: 'center' }}>
                    <Typography component='h1' variant='h2'
                        sx={{
                            fontWeight: 'bold'
                        }}
                    >
                        Contador de Cliques
                    </Typography>

                    <Typography component='p' variant='h6'
                        sx={{
                            fontWeight: '400',
                            color: theme.palette.text.secondary,
                            marginTop: '18px',
                            marginBottom: '30px',
                        }}
                    >
                        Aqui você vai encontrar o projeto de forma mais detalhada: conhecer suas funcionalidades, a forma que foi estruturada, tecnologias utilizadas e todo o aprendizado obtido durante o desenvolvimento da aplicação.
                    </Typography>

                    <Box component='div' sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                        <MuiLink href='https://contador-de-cliques-three.vercel.app/' target='_blank'>
                            <Button size='large'
                                sx={{
                                    backgroundColor: theme.palette.secondary.main,
                                    fontSize: '17px',
                                    gap: '5px',
                                    paddingY: '15px',
                                    paddingX: '20px',
                                    minWidth: '151px'
                                }}
                            >
                                <MdLaunch size={25} />
                                PROJETO
                            </Button>
                        </MuiLink>

                        <MuiLink href='https://github.com/Guuzta/contador_de_cliques' target='_blank'>
                            <Button size='large' variant='outlined'
                                sx={{

                                    fontSize: '17px',
                                    gap: '5px',
                                    paddingY: '15px',
                                    paddingX: '20px',
                                    minWidth: '151px'
                                }}
                            >
                                <FaGithub size={25} />
                                GITHUB
                            </Button>
                        </MuiLink>

                    </Box>
                </Box>
            </Container>

            <Container component='section' maxWidth='lg' sx={{ paddingY: '96px' }}>
                <CardMedia
                    component='img'
                    height="340"
                    image="/images/primeiroProjeto.png"
                    title="notebook"
                    sx={{
                        width: 'fit-content',
                        margin: '0 auto'
                    }}
                />

                <Box sx={{ width: 'fit-content', borderBottom: '1px solid #EAB308', marginTop: '50px' }}>
                    <Typography component='h2' sx={{ fontSize: '28px', fontWeight: 'bold' }}>
                        VISÃO GERAL
                    </Typography>
                </Box>

                <Typography component='p' variant='h6'
                    sx={{
                        fontWeight: '300',
                        color: theme.palette.text.secondary,
                        marginY: '20px'
                    }}
                >
                    Uma plataforma interativa cujo objetivo é registrar e contabilizar o maior número de cliques realizados pelo usuário, permitindo medir o desempenho de forma simples e divertida.
                </Typography>

                <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                    OBJETIVO
                </Typography>

                <Typography component='p' variant='h6'
                    sx={{
                        fontWeight: '300',
                        color: theme.palette.text.secondary,
                        marginY: '20px'
                    }}
                >
                    O objetivo deste projeto foi desenvolver uma aplicação prática que explorasse conceitos fundamentais do desenvolvimento web. Para isso, foram trabalhadas três conceitos principais: a manipulação do DOM, permitindo a interação dinâmica entre usuário e interface; a implementação de um sistema lógico de pontuação construído em JavaScript , responsável por registrar e contabilizar cliques de forma precisa; e a criação de uma interface visual clara e funcional, estruturada em HTML e estilizada com CSS. Dessa forma, o projeto integra lógica, interação e design.
                </Typography>

                <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                    RECURSOS PRINCIPAIS
                </Typography>

                <List>
                    <ListItem sx={{ paddingX: '0', alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: '0', marginTop: '3px', marginRight: '8px' }}>
                            <IoIosCheckbox size={25} color={theme.palette.secondary.main} />
                        </ListItemIcon>

                        <Typography sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '18px',
                            fontWeight: '300',
                            fontStyle: 'italic',
                        }}>
                            <b>Teste de velocidade de cliques</b> – O usuário pode clicar no círculo central para medir quantos cliques consegue fazer em um tempo determinado.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ paddingX: '0', alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: '0', marginTop: '3px', marginRight: '8px' }}>
                            <IoIosCheckbox size={25} color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <Typography sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '18px',
                            fontWeight: '300',
                            fontStyle: 'italic',
                        }}>
                            <b>Opções de tempo</b> – É possível escolher diferentes durações para o teste (15, 20 ou 30 segundos).
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ paddingX: '0', alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: '0', marginTop: '3px', marginRight: '8px' }}>
                            <IoIosCheckbox size={25} color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <Typography sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '18px',
                            fontWeight: '300',
                            fontStyle: 'italic',
                        }}>
                            <b>Exibição da pontuação</b> – Mostra em tempo real a quantidade de cliques durante o teste e guarda a pontuação anterior para comparação.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ paddingX: '0', alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: '0', marginTop: '3px', marginRight: '8px' }}>
                            <IoIosCheckbox size={25} color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <Typography sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '18px',
                            fontWeight: '300',
                            fontStyle: 'italic',
                        }}>
                            <b>Interface interativa</b> – O design destaca os elementos principais (botão de clique, tempo, cliques, pontuação) de forma clara e fácil de usar.
                        </Typography>
                    </ListItem>
                </List>

                <Typography component='h2' variant='h5' sx={{ marginY: '30px', fontWeight: 'bold' }}>
                    TECNOLOGIAS UTILIZADAS
                </Typography>



                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                            backgroundColor: theme.palette.background.card,
                            minWidth: '130px',
                            padding: '10px'
                        }}
                    >
                        <FaHtml5 size={30} color={theme.palette.secondary.main} />

                        <Typography component='span' variant='body1' sx={{ color: 'white' }}>
                            HTML
                        </Typography>
                    </Card>

                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                            backgroundColor: theme.palette.background.card,
                            minWidth: '130px',
                            padding: '10px'
                        }}
                    >
                        <FaCss3Alt size={30} color={theme.palette.secondary.main} />

                        <Typography component='span' variant='body1' sx={{ color: 'white' }}>
                            CSS
                        </Typography>
                    </Card>

                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                            backgroundColor: theme.palette.background.card,
                            minWidth: '130px',
                            padding: '10px'
                        }}
                    >
                        <IoLogoJavascript size={30} color={theme.palette.secondary.main} />

                        <Typography component='span' variant='body1' sx={{ color: 'white' }}>
                            JavaScript
                        </Typography>
                    </Card>

                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                            backgroundColor: theme.palette.background.card,
                            minWidth: '130px',
                            padding: '10px'
                        }}
                    >
                        <FaNodeJs size={30} color={theme.palette.secondary.main} />

                        <Typography component='span' variant='body1' sx={{ color: 'white' }}>
                            NodeJS
                        </Typography>
                    </Card>

                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                            backgroundColor: theme.palette.background.card,
                            minWidth: '130px',
                            padding: '10px'
                        }}
                    >
                        <VscVscode size={30} color={theme.palette.secondary.main} />

                        <Typography component='span' variant='body1' sx={{ color: 'white' }}>
                            VsCode
                        </Typography>
                    </Card>
                </Box>
            </Container>

            <Footer />
        </>
    )
}

export default Contador