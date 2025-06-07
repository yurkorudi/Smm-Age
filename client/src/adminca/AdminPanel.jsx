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
  CircularProgress,
  Snackbar,
  Alert
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

const SIDEBAR_WIDTH = 240;
const sidebarGradient = 'linear-gradient(180deg, #074177 1%, #07001C 14%)';
const mainGradient = 'linear-gradient(180deg, #074177 10%, #000000 100%)';
const diagramGradient = 'linear-gradient(180deg, #074177 1%, #000000 50%)';
const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'];

function VisitorsChart() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [visitorsData, setVisitorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVisitorsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/visitors?year=${year}`, {
          credentials: 'include'
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setVisitorsData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching visitors data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorsData();
  }, [year]);

  return (
    <Box>
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
          <MenuItem value={new Date().getFullYear()}>{new Date().getFullYear()}</MenuItem>
          <MenuItem value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</MenuItem>
        </Select>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
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
      )}
    </Box>
  );
}

function Sidebar() {
  const [menuItems] = useState([
    { text: 'Dashboard', icon: <HomeIcon />, active: false },
    { text: 'Аналітика', icon: <BarChartIcon />, active: true },
    { text: 'Джерела трафіку', icon: <TrafficIcon />, active: false },
    { text: 'Звіти', icon: <DescriptionIcon />, active: false },
    { text: 'Інтеграції', icon: <DescriptionIcon />, active: false },
  ]);

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
          <ListItem 
            key={text} 
            button 
            sx={{ 
              py: 1, 
              mb: 1, 
              borderRadius: 1, 
              bgcolor: active ? 'rgba(255,255,255,0.1)' : 'transparent' 
            }}
          >
            <ListItemIcon sx={{ minWidth: 32, color: '#cbd2ff' }}>{icon}</ListItemIcon>
            <ListItemText 
              primary={text} 
              primaryTypographyProps={{ variant: 'body2', color: '#cbd2ff' }} 
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List dense sx={{ pb: 2 }}>
        {bottomItems.map(({ text, icon, route }) => (
          <ListItem 
            key={text} 
            button 
            component={Link} 
            to={route} 
            sx={{ py: 1, mb: 1, borderRadius: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 32, color: '#6b6b7b' }}>{icon}</ListItemIcon>
            <ListItemText 
              primary={text} 
              primaryTypographyProps={{ variant: 'body2', color: '#6b6b7b' }} 
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default function AdminPanel() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('Адміністратор');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        

        const statsResponse = await fetch('http://localhost:5000/api/dashboard-stats', {
          credentials: 'include'
        });
        if (!statsResponse.ok) throw new Error('Failed to fetch stats');
        const statsData = await statsResponse.json();
        setCards(statsData);


        const userResponse = await fetch('http://localhost:5000/api/user-info', {
          credentials: 'include'
        });
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUsername(userData.username || 'Адміністратор');
        }

      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ height: 200, background: mainGradient }} />
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 500, mb: 3 }}>
            Привіт, {username}!
          </Typography>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error" sx={{ mb: 3 }}>
              Помилка завантаження даних: {error}
            </Typography>
          ) : (
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
          )}

          <Box sx={{ mt: 4, p: 3, borderRadius: 2, background: diagramGradient }}>
            <VisitorsChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}