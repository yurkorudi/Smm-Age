// src/components/MainPage.jsx
import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Stack,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link as RouterLink } from 'react-router-dom';
import Footer from './Footer';

export default function MainPage() {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: 'linear-gradient(to bottom, #074177 0%, #000 100%)',
          px: { xs: 2, md: 5 },
          py: 2,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
            <Box component="span" sx={{ color: '#07001C' }}>Smm</Box>
            <Box component="span" sx={{ color: '#fff', ml: 0.5 }}>Age</Box>
          </Typography>
          <Stack direction="row" spacing={7}>
            <MuiLink component={RouterLink} to="/services" sx={{ color: '#fff', fontSize: '1rem' }}>
              наші послуги
            </MuiLink>
            <MuiLink component={RouterLink} to="/about" sx={{ color: '#fff', fontSize: '1rem' }}>
              про нас
            </MuiLink>
            <MuiLink component={RouterLink} to="/contacts" sx={{ color: '#fff', fontSize: '1rem' }}>
              контакти
            </MuiLink>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="section"
        sx={{
          textAlign: 'left',
          px: { xs: 2, md: 5 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight: 300,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          розвивайте свій бізнес<br />
          з{' '}
          <Box component="span" sx={{ color: '#0D8AFF', fontWeight: 750 }}>Smm</Box>
          <Box component="span" sx={{ color: '#fff', fontWeight: 750 }}>Age</Box>
        </Typography>
        <Typography sx={{ mb: 4, color: '#ddd', fontSize: '0.875rem', maxWidth: 600, lineHeight: 1.8 }}>
          Професійне створення контенту<br />
          ведення соціальних мереж<br />
          розробка сайтів для вашого бізнесу
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="/services"
          sx={{
            background: '#074177',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontWeight: 700,
            borderRadius: '4px',
            '&:hover': { background: '#062f56' },
          }}
        >
          наші послуги
        </Button>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/contacts"
          sx={{
            ml: 2,
            border: '2px solid #fff',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontWeight: 700,
            borderRadius: '4px',
            '&:hover': { background: '#fff', color: '#000' },
          }}
        >
          зв’язатись з нами
        </Button>
      </Box>

      <Box
        component="section"
        sx={{
          textAlign: 'center',
          px: { xs: 2, md: 5 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 300, mb: 1 }}>
          наші роботи
        </Typography>
        <Typography sx={{ color: '#bbb', fontSize: '1.1rem', mb: 6 }}>
          перегляньте приклади успішних проектів
        </Typography>
        <Grid container spacing={10} justifyContent="center">
          {[0, 1, 2].map((_, i) => (
            <Grid item key={i}>
              <Card sx={{ width: 350, borderRadius: '20px', overflow: 'hidden' }}>
                <Box
                  sx={{
                    height: 220,
                    bgcolor: '#074177',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CameraAltIcon sx={{ color: '#fff', fontSize: 40 }} />
                </Box>
                <CardContent sx={{ bgcolor: '#e6e6e6', color: '#111', p: 2 }}>
                  <Typography component="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1 }}>
                    сайт для мережі кінотеатрів Chaplin
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', mb: 2 }}>
                    повнофункціональний сайт з логікою для придбання квитків, бронювання місць, створення геометрії залу та продажу квитків на місці (ресепції)
                  </Typography>
                  <MuiLink href="#" sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#074177' }}>
                    переглянути деталі →
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
