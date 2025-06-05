// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#074177', color: '#FFFFFF', pt: 4, pb: 3, fontFamily: 'Montserrat, sans-serif' }}>
      <Container>
        <Box component="hr" sx={{ borderColor: 'rgba(255,255,255,0.7)', mb: 4 }} />
        <Grid container spacing={20} sx={{ fontSize: '1rem' }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: 1.2, mb: 1 }}>
              послуги:
            </Typography>
            <Stack spacing={0.75} sx={{ fontWeight: 300 }}>
              <MuiLink component={RouterLink} to="/services" underline="none" color="inherit">
                створення контенту
              </MuiLink>
              <MuiLink component={RouterLink} to="/services" underline="none" color="inherit">
                таргетована реклама
              </MuiLink>
              <MuiLink component={RouterLink} to="/services" underline="none" color="inherit">
                розробка веб-сайтів
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: 1.2, mb: 1 }}>
              корисні лінки:
            </Typography>
            <Stack spacing={0.75} sx={{ fontWeight: 300 }}>
              <MuiLink component={RouterLink} to="/" underline="none" color="inherit">
                головна
              </MuiLink>
              <MuiLink component={RouterLink} to="/about" underline="none" color="inherit">
                про нас
              </MuiLink>
              <MuiLink component={RouterLink} to="/contacts" underline="none" color="inherit">
                контакти
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: 1.2, mb: 1 }}>
              контакти:
            </Typography>
            <Stack spacing={0.75} sx={{ fontWeight: 300 }}>
              <Typography>smmageofficialpage@gmail.com</Typography>
              <Typography>+380 68 643 69 75</Typography>
              <Typography>@SmmAgeOfficial</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <MuiLink href="#" aria-label="Email" color="inherit"><EmailIcon fontSize="large" /></MuiLink>
            <MuiLink href="#" aria-label="Facebook" color="inherit"><FacebookIcon fontSize="large" /></MuiLink>
            <MuiLink href="https://www.instagram.com/smm_age_official/" aria-label="Instagram" color="inherit"><InstagramIcon fontSize="large" /></MuiLink>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.625rem', fontWeight: 300 }}>
          <Typography>Copyright © 2025 SMMAGE Inc. Website designed by own devs</Typography>
          <Typography sx={{ fontWeight: 750, fontSize: '2.5rem' }}>
            <Box component="span" sx={{ color: '#000' }}>Smm</Box>
            <Box component="span" sx={{ color: '#fff' }}>Age</Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
