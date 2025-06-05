// src/components/Contacts.jsx
import React from 'react';
import { Container, Typography, Stack, Box, Link as MuiLink } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contacts() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Контакти
      </Typography>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ mr: 1 }} />
          <Typography>smmageofficialpage@gmail.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography>+380 68 643 69 75</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InstagramIcon sx={{ mr: 1 }} />
          <MuiLink href="https://www.instagram.com/smm_age_official/" target="_blank" rel="noopener">
            @SmmAgeOfficial
          </MuiLink>
        </Box>
      </Stack>
    </Container>
  );
}
