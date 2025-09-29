import { Card, Typography } from "@mui/material"

import { useTheme } from '@mui/material/styles';

const SkillCard = ({ Icon, title, text }) => {

    const theme = useTheme()

    return (
        <Card
            sx={{
                backgroundColor: theme.palette.background.card,
                textAlign: 'center',
                paddingY: '52px',
                paddingX: '32px',
                width: '50% ',
                minHeight: '330px',
                borderRadius: '10px'
            }}
        >
            <Icon size={50} color={theme.palette.secondary.main} />

            <Typography component='h3'
                sx={{
                    color: 'white',
                    fontSize: '35px',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                }}
            >
                {title}
            </Typography>

            <Typography component='p'sx={{ color: theme.palette.text.secondary, margin: '0 auto', fontSize: '18px' }}>
                {text}
            </Typography>
        </Card>
    )
}

export default SkillCard