// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Stack, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
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
        {/* Logo navigates to main page */}
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

        {/* Navigation Links */}
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
  );
}
