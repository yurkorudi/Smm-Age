// src/components/ContactUs.jsx
import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Stack,
  TextField,
  Button,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Footer from './Footer';

const services = [
  'SMM-просування',
  'Розробка контенту',
  'Веб-розробка (лендінги, сайти)',
  'Інше...',
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  // Визначаємо, які поля показувати
  const showPhone = formData.name.length > 0;
  const showEmail = showPhone && formData.phone.length > 0;
  const showService = showEmail && formData.email.length > 0;

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Хедер */}
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
              sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
            >
              <Box component="span" sx={{ color: '#07001C' }}>
                Smm
              </Box>
              <Box component="span" sx={{ color: '#fff', ml: 0.5 }}>
                Age
              </Box>
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

      {/* Форма */}
      <Box
        component="section"
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 5 },
          py: { xs: 8, md: 12 },
          maxWidth: 600,
          mx: 'auto',
          textAlign: 'left',
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight: 300,
            mb: 4,
            lineHeight: 1.2,
          }}
        >
          Залиште заявку
        </Typography>

        {/* Ім'я */}
        <Fade in={true} timeout={500}>
          <TextField
            label="Ім'я"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            sx={{ mb: 4, input: { color: '#fff' }, label: { color: '#ccc' }, fieldset: { borderColor: '#555' } }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Fade>

        {/* Телефон */}
        <Fade in={showPhone} timeout={700} unmountOnExit>
          <TextField
            label="Номер телефону"
            variant="outlined"
            fullWidth
            required
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            sx={{ mb: 4, input: { color: '#fff' }, label: { color: '#ccc' }, fieldset: { borderColor: '#555' } }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Fade>

        {/* Email */}
        <Fade in={showEmail} timeout={900} unmountOnExit>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            sx={{ mb: 4, input: { color: '#fff' }, label: { color: '#ccc' }, fieldset: { borderColor: '#555' } }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Fade>

        {/* Вибір послуги */}
        <Fade in={showService} timeout={1100} unmountOnExit>
          <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
            <InputLabel sx={{ color: '#ccc' }}>Оберіть послугу</InputLabel>
            <Select
              value={formData.service}
              label="Оберіть послугу"
              onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
              sx={{
                color: '#fff',
                backgroundColor: '#001f4d',
                borderRadius: 1,
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1976d2',
                },
                '.MuiSvgIcon-root': {
                  color: '#ccc',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#001f4d',
                    color: '#fff',
                  },
                },
              }}
            >
              {services.map((service) => (
                <MenuItem
                  key={service}
                  value={service}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: '#003080',
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#0040b3',
                    },
                    '&:hover': {
                      backgroundColor: '#002060',
                    },
                  }}
                >
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Fade>

        {/* Кнопка відправки */}
        <Fade in={showService} timeout={1300} unmountOnExit>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#074177', color: '#fff' }}
            onClick={() => alert('Форма відправлена!')}
            disabled={!formData.name || !formData.phone || !formData.email || !formData.service}
            fullWidth
          >
            Відправити
          </Button>
        </Fade>
      </Box>

      {/* Футер */}
      <Footer />
    </Box>
  );
}
