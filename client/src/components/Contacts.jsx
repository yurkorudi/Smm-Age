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
  MenuItem,
  Fade,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Footer from './Footer';

const services = [
  'SMM-просування',
  'Розробка контенту',
  'Веб-розробка (створення сайтів)',
  'інше',
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showService, setShowService] = useState(false);

  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === 'name' && value.trim() !== '') setShowPhone(true);
    if (field === 'phone' && value.trim() !== '') setShowEmail(true);
    if (field === 'email' && value.trim() !== '') setShowService(true);
  };

  const handleSubmit = async () => {
    setSending(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.message || 'Форма відправлена!');
        setFormData({ name: '', phone: '', email: '', service: '' });
        setShowPhone(false);
        setShowEmail(false);
        setShowService(false);
      } else {
        setErrorMsg('Сталася помилка, спробуйте пізніше.');
      }
    } catch {
      setErrorMsg('Не вдалося зв’язатися із сервером.');
    } finally {
      setSending(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh', // мінімальна висота 100% вікна
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: 'linear-gradient(to bottom, #074177 0%, #000 100%)',
          px: { xs: 2, md: 5 },
          py: 2,
          flexShrink: 0, // щоб header не стискався
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

      {/* Основний контент - форма */}
      <Box
        component="section"
        sx={{
          maxWidth: 500,
          mx: 'auto',
          py: 8,
          px: 3,
          flexGrow: 1, // займає весь вільний простір
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          color: '#fff',
        }}
      >
        <Typography
          component="h1"
          sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 300, mb: 2 }}
        >
          Замовити послугу
        </Typography>

        <TextField
          variant="filled"
          label="Ім'я"
          value={formData.name}
          onChange={handleChange('name')}
          fullWidth
          InputLabelProps={{ sx: { color: '#bbb' } }}
          sx={{
            input: { color: '#fff' },
            backgroundColor: '#074177',
            borderRadius: 1,
          }}
        />

        <Fade in={showPhone} timeout={800} unmountOnExit>
          <TextField
            variant="filled"
            label="Номер телефону"
            value={formData.phone}
            onChange={handleChange('phone')}
            fullWidth
            InputLabelProps={{ sx: { color: '#bbb' } }}
            sx={{
              input: { color: '#fff' },
              backgroundColor: '#074177',
              borderRadius: 1,
            }}
          />
        </Fade>

        <Fade in={showEmail} timeout={1100} unmountOnExit>
          <TextField
            variant="filled"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            fullWidth
            InputLabelProps={{ sx: { color: '#bbb' } }}
            sx={{
              input: { color: '#fff' },
              backgroundColor: '#074177',
              borderRadius: 1,
            }}
          />
        </Fade>

        <Fade in={showService} timeout={1400} unmountOnExit>
          <TextField
            select
            label="Оберіть послугу"
            value={formData.service}
            onChange={handleChange('service')}
            fullWidth
            InputLabelProps={{ sx: { color: '#bbb' } }}
            sx={{
              input: { color: '#fff' },
              backgroundColor: '#074177',
              borderRadius: 1,
              '& .MuiSelect-select': { color: '#fff' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
            }}
          >
            {services.map((option) => (
              <MenuItem
                key={option}
                value={option}
                sx={{
                  backgroundColor: '#074177',
                  color: '#fff',
                  '&.Mui-selected': { backgroundColor: '#052e57' },
                  '&:hover': { backgroundColor: '#052e57' },
                }}
              >
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Fade>

        <Fade in={showService} timeout={1400} unmountOnExit>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#074177', color: '#fff' }}
            onClick={handleSubmit}
            disabled={
              sending ||
              !formData.name ||
              !formData.phone ||
              !formData.email ||
              !formData.service
            }
          >
            {sending ? 'Відправка...' : 'Відправити'}
          </Button>
        </Fade>

        {successMsg && (
          <Typography color="success.main" sx={{ mt: 2 }}>
            {successMsg}
          </Typography>
        )}
        {errorMsg && (
          <Typography color="error.main" sx={{ mt: 2 }}>
            {errorMsg}
          </Typography>
        )}
      </Box>

      {/* Footer */}
      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}
