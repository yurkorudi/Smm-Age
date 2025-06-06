// src/components/OurServices.jsx
import React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import InstagramIcon from '@mui/icons-material/Instagram';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from './Header';
import Footer from './Footer';

const servicesData = [
  {
    title: 'створення контенту',
    description:
      'Розробка унікального та привабливого контенту для ваших соціальних мереж, блогів та веб-сайтів.',
    items: ['фото, відео та графіка', 'тексти, статті', 'рекламні кампанії', 'оформлення'],
    icon: <CommentIcon fontSize="small" sx={{ color: '#fff' }} />,
  },
  {
    title: 'ведення соц. мереж',
    description:
      'Комплексне управління вашими соціальними мережами для збільшення вподобань та залучення аудиторії.',
    items: ['Instagram, Facebook, TikTok', 'планування постів', 'аналітика та звіти', 'просування та реклама'],
    icon: <InstagramIcon fontSize="small" sx={{ color: '#fff' }} />,
  },
  {
    title: 'розробка веб-сайтів',
    description:
      'Створення сучасних, функціональних та адаптивних веб-сайтів для вашого бізнесу.',
    items: ['лендінги', 'корпоративні сайти', 'інтернет-магазини', 'web-сервіси та додатки'],
    icon: <DesktopWindowsIcon fontSize="small" sx={{ color: '#fff' }} />,
  },
  {
    title: 'таргетована реклама',
    description:
      'Розробка та запуск ефективної реклами для соціальних мереж, що залучає нових клієнтів та підвищує продажі.',
    items: ['настройка аудиторій', 'ведення кампаній в Instagram Ads', 'аналіз результатів та оптимізація'],
    icon: <BarChartIcon fontSize="small" sx={{ color: '#fff' }} />,
  },
  {
    title: 'комплексне рішення',
    description:
      'Повний супровід вашого бренду — від створення стратегії до реалізації всіх комунікацій у продажах і рекламі.',
    items: ['стратегія просування', 'контент', 'інтернет-маркетинг — сайт (лендінг/блог)', 'реклама'],
    icon: <SettingsIcon fontSize="small" sx={{ color: '#fff' }} />,
  },
];

export default function OurServices() {
  return (
    <>
      <Header />
      <Box component="section" sx={{ py: 8, backgroundColor: '#000', color: '#fff' }}>
        {/* Заголовок */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 1, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}
          >
            наші послуги:
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', fontSize: 14 }}>
            Ми пропонуємо повний спектр послуг для розвитку вашого бізнесу в цифровому просторі
          </Typography>
        </Box>

        {/* Перший рядок: 3 картки */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
            mb: 5,
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          {servicesData.slice(0, 3).map((service, idx) => (
            <Box key={idx} sx={{ flexBasis: { xs: '100%', sm: '45%', md: '30%' } }}>
              <Card
                sx={{
                  bgcolor: '#f5f5f5',
                  borderRadius: '16px',
                  minHeight: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                }}
              >
                <Avatar sx={{ bgcolor: '#1e3a8a', width: 32, height: 32, mb: 2 }}>
                  {service.icon}
                </Avatar>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#000', textTransform: 'capitalize' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 12, mb: 2, color: 'text.secondary', lineHeight: 1.4 }}>
                    {service.description}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      mb: 2,
                      '& li': { fontSize: 12, lineHeight: 1.4, color: '#000' },
                      '& li::marker': { color: '#1e3a8a' },
                    }}
                  >
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 0 }}>
                  <Button
                    size="small"
                    sx={{ color: '#1e3a8a', textTransform: 'none', fontWeight: 'bold', fontSize: 12, p: 0 }}
                    component={RouterLink}
                    to="/contacts"
                  >
                    дізнатись більше<ArrowRightIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Другий рядок: 2 картки */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          {servicesData.slice(3).map((service, idx) => (
            <Box key={idx} sx={{ flexBasis: { xs: '100%', sm: '45%', md: '30%' } }}>
              <Card
                sx={{
                  bgcolor: '#f5f5f5',
                  borderRadius: '16px',
                  minHeight: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                }}
              >
                <Avatar sx={{ bgcolor: '#1e3a8a', width: 32, height: 32, mb: 2 }}>
                  {service.icon}
                </Avatar>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#000', textTransform: 'capitalize' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 12, mb: 2, color: 'text.secondary', lineHeight: 1.4 }}>
                    {service.description}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      mb: 2,
                      '& li': { fontSize: 12, lineHeight: 1.4, color: '#000' },
                      '& li::marker': { color: '#1e3a8a' },
                    }}
                  >
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 0 }}>
                  <Button
                    size="small"
                    sx={{ color: '#1e3a8a', textTransform: 'none', fontWeight: 'bold', fontSize: 12, p: 0 }}
                    component={RouterLink}
                    to="/contacts"
                  >
                    дізнатись більше<ArrowRightIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Кнопка контакту */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/contacts"
            sx={{ borderColor: '#fff', borderWidth: '1px', color: '#fff', textTransform: 'uppercase', px: 6, py: 1 }}
          >
            зв'язатись з нами
          </Button>
        </Box>
      </Box>
      <Footer />
      
    </>
  );
}