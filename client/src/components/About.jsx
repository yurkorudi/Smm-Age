// src/components/About.jsx
import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Stack,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Footer from './Footer';

export default function About() {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* ===== Навігаційний AppBar (той самий, що у MainPage) ===== */}
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
           <MuiLink
                     component={RouterLink}
                     to="/"
                     underline="none"
                     sx={{ display: 'flex', alignItems: 'center' }}
                   >
                     <Typography variant="h6" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
                       <Box component="span" sx={{ color: '#07001C' }}>Smm</Box>
                       <Box component="span" sx={{ color: '#fff', ml: 0.5 }}>Age</Box>
                     </Typography>
                   </MuiLink>
          </Typography>
          <Stack direction="row" spacing={7}>
            <MuiLink
              component={RouterLink}
              to="/services"
              sx={{ color: '#fff', fontSize: '1rem', textDecoration: 'none' }}
            >
              наші послуги
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/about"
              sx={{ color: '#fff', fontSize: '1rem', textDecoration: 'none' }}
            >
              про нас
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/contacts"
              sx={{ color: '#fff', fontSize: '1rem', textDecoration: 'none' }}
            >
              контакти
            </MuiLink>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* ===== Секція "Про нас" ===== */}
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
          про нас:
        </Typography>
        <Typography
          sx={{
            mb: 4,
            color: '#ddd',
            fontSize: '1rem',
            maxWidth: 700,
            lineHeight: 1.8,
          }}
        >
          <Box component="span" sx={{ fontWeight: 700 }}>
            SmmAge
          </Box>{' '}
          — це інструмент для вашого бізнесу. Ми займаємося медійним розвитком, просуванням у соцмережах та надаємо комплексні послуги:
        </Typography>
        <Box component="ul" sx={{ listStyle: 'disc', pl: 4, color: '#ddd', mb: 6 }}>
          <Box component="li" sx={{ mb: 1, fontSize: '1rem' }}>
            Розробка контенту
          </Box>
          <Box component="li" sx={{ mb: 1, fontSize: '1rem' }}>
            SMM-просування
          </Box>
          <Box component="li" sx={{ fontSize: '1rem' }}>
            Веб-розробка та дизайн
          </Box>
        </Box>
      </Box>

      {/* ===== Секція "Наша команда" (аналогічно секції "Наші роботи" у MainPage) ===== */}
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          px: { xs: 2, md: 5 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 300, mb: 1 }}>
          наша команда
        </Typography>
        <Typography sx={{ color: '#bbb', fontSize: '1.1rem', mb: 6 }}>
          познайомтесь з нашими фахівцями
        </Typography>

        <Grid container spacing={10} justifyContent="center">
          {/* Team Member 1 */}
          <Grid item>
            <Box sx={{ width: 400, borderRadius: '20px', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Avatar
                  src="/src/img/Yura.png"
                  alt="Yurko Pistun"
                  sx={{
                    width: 200,
                    height: 200,
                    border: '4px solid #074177',
                  }}
                />
              </Box>
              <CardContent sx={{ color: '#FFFFFF', p: 2, pt: 1 }}>
                <Typography component="h3" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1 }}>
                  Yurko Pistun
                </Typography>
                <Typography sx={{ fontSize: '1.2rem', lineHeight: 1.5 }}>
                  Засновник компанії, спеціаліст із SMM-просування. 
                  Керує рекламними кампаніями у соціальних мережах та розробляє стратегії зростання аудиторії.
                </Typography>
              </CardContent>
            </Box>
          </Grid>

          {/* Team Member 2 */}
          <Grid item>
            <Box sx={{ width: 400, borderRadius: '20px', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Avatar
                  src="/src/img/Pavlo.png"
                  alt="Pavlo Boiko"
                  sx={{
                    width: 200,
                    height: 200,
                    border: '4px solid #074177',
                  }}
                />
              </Box>
              <CardContent sx={{ color: '#FFFFFF', p: 2, pt: 1 }}>
                <Typography component="h3" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1 }}>
                  Pavlo Boiko
                </Typography>
                <Typography sx={{ fontSize: '1.2rem', lineHeight: 1.5 }}>
                 Засновник компанії, очільник відділу веб-розробки. Відповідає за технічну частину
                  проєктів та архітектуру сайтів.
                </Typography>
              </CardContent>
            </Box>
          </Grid>

          {/* Team Member 3 */}
          <Grid item>
            <Box sx={{ width: 400, borderRadius: '20px', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Avatar
                  src="/src/img/Olenka.png"
                  alt="Olenka Mashtaliar"
                  sx={{
                    width: 200,
                    height: 200,
                    border: '4px solid #074177',
                  }}
                />
              </Box>
              <CardContent sx={{  color: '#FFFFFF', p: 2, pt: 1 }}>
                <Typography component="h3" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1 }}>
                  Olenka Mashtaliar
                </Typography>
                <Typography sx={{ fontSize: '1.2rem', lineHeight: 1.5 }}>
                 Засновниця компанії, контент-менеджер та дизайнер. 
                 Створює візуальний контент та координує виробництво матеріалів для соцмереж.
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
