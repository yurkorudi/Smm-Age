import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Toolbar,
} from '@mui/material';
import {
  Home as HomeIcon,
  ShowChart as BarChartIcon,
  Timeline as TrafficIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';

// Константи
const SIDEBAR_WIDTH = 240;
const sidebarGradient = 'linear-gradient(180deg, #074177 1%, #07001C 14%)';
const mainGradient = 'linear-gradient(180deg, #074177 10%, #000000 100%)';
const diagramGradient = 'linear-gradient(180deg, #074177 1%, #000000 50%)';

// Місяці на осі X
const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'];

function VisitorsChart() {
  const [year, setYear] = useState(2025);
  const [visitorsData, setVisitorsData] = useState([]);

  useEffect(() => {
    // TODO: Замість статичних даних зробити API-запит для отримання кількості відвідувачів за обраний рік
    // fetch(`/api/visitors?year=${year}`)
    //   .then(res => res.json())
    //   .then(data => setVisitorsData(data))
    //   .catch(err => console.error(err));
    setVisitorsData([35, 63, 72, 75, 45, 85, 72, 20, 60, 80, 25, 55]); // тимчасові дані
  }, [year]);

  return (
    <Box>
      {/* Заголовок з вибором року */}
      <Box sx={{ display: 'flex', color: 'white', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Кількість відвідувачів ({year})
        </Typography>
        <Select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          size="small"
          IconComponent={ArrowDropDownIcon}
          sx={{
            color: '#fff',
            '.MuiOutlinedInput-notchedOutline': { borderColor: '#3a4a7a' },
            '.MuiSelect-icon': { color: '#fff' },
            fontSize: '1rem',
          }}
        >
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
        </Select>
      </Box>

     <BarChart
  height={300}
  series={[{ data: visitorsData, label: 'Відвідувачі', color: '#074177' }]}
  xAxis={[{ data: months, scaleType: 'band', tickLabelStyle: { fill: '#fff' } }]}
  yAxis={[{ tickLabelStyle: { fill: '#fff' } }]}
  slotProps={{
    legend: {
      sx: {
        color: '#fff',
        fontSize: '1rem',
      },
    },
  }}
  sx={{
    '& .MuiBar-root': { borderRadius: 4 },
    '& .MuiChartsAxis-line': { stroke: '#3a4a7a' },
  }}
/>
    </Box>
  );
}

function Sidebar() {
  const [menuItems, _setMenuItems] = useState([
    { text: 'Dashboard', icon: <HomeIcon />, active: false },
    { text: 'Аналітика', icon: <BarChartIcon />, active: true },
    { text: 'Джерела трафіку', icon: <TrafficIcon />, active: false },
    { text: 'Звіти', icon: <DescriptionIcon />, active: false },
    { text: 'Інтеграції', icon: <DescriptionIcon />, active: false },
  ]);

  useEffect(() => {
    // TODO: Підтягувати список меню з бекенду
    // fetch('/api/menu')
    //   .then(res => res.json())
    //   .then(data => _setMenuItems(data))
    //   .catch(err => console.error(err));
  }, []);

  const bottomItems = [
    { text: 'Налаштування', icon: <SettingsIcon />, route: '/settings' },
    { text: 'Допомога', icon: <HelpIcon />, route: '/help' },
    { text: 'Вийти', icon: <LogoutIcon />, route: '/' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          background: sidebarGradient,
          color: '#cbd2ff',
          border: 'none',
        },
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', py: 3 }}>
        <Typography variant="h5" fontSize={32} fontWeight={800}>
          <Box component="span" sx={{ color: '#07001C' }}>Smm</Box>
          <Box component="span" sx={{ color: '#fff' }}>Age</Box>
        </Typography>
      </Toolbar>
      <List dense>
        {menuItems.map(({ text, icon, active }) => (
          <ListItem key={text} button sx={{ py: 1, mb: 1, borderRadius: 1, bgcolor: active ? 'rgba(255,255,255,0.1)' : 'transparent' }}>
            <ListItemIcon sx={{ minWidth: 32, color: '#cbd2ff' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', color: '#cbd2ff' }} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List dense sx={{ pb: 2 }}>
        {bottomItems.map(({ text, icon, route }) => (
          <ListItem key={text} button component={Link} to={route} sx={{ py: 1, mb: 1, borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 32, color: '#6b6b7b' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', color: '#6b6b7b' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default function AdminPanel() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // TODO: Завантажити показники для карток через API
    // fetch('/api/dashboard-stats')...
    setCards([
      { title: 'Кількість заявок форми', value: '15', change: '0 – 35.74%', gradient: true },
      { title: 'Середня тривалість сесії', value: '5,38 хв', change: '0 – 10.74%', gradient: false },
      { title: 'Показник відмов', value: '1', change: '0 – 10.74%', gradient: false },
    ]);
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Хедер: тут можна підтягути дані для банера */}
        <Box sx={{ height: 200, background: mainGradient }} />
        {/* Контент */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 500, mb: 3 }}>
            Привіт, адміністратор! {/* TODO: замінити на динамічне ім'я користувача */}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {cards.map(({ title, value, change, gradient }) => (
              <Card
                key={title}
                sx={{
                  flex: '1 1 calc(33% - 1rem)',
                  minWidth: 250,
                  borderRadius: 2,
                  p: 2,
                  background: gradient ? mainGradient : '#07001C',
                  border: '1px solid #3a4a7a',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: '#cbd2ff' }}>{title}</Typography>
                  <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, my: 1 }}>{value}</Typography>
                  <Typography variant="body2" sx={{ color: '#cbd2ff' }}>{change}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Застосовано градієнт фону для блоку діаграми */}
          <Box sx={{ mt: 4, p: 3, borderRadius: 2, background:diagramGradient, color: '#A9A9A9' }}>
            <VisitorsChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
