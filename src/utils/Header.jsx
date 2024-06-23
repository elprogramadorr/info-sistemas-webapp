import * as React from 'react';
import {AppBar, Toolbar, Tabs, Tab, Box, Typography, useMediaQuery, Grid} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  const [value, setValue] = React.useState('one');
  const isMobile = useMediaQuery('(max-width:1000px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    menu: {
      width: '100%',
      borderBottom: '1px solid #ccc',
    },
    tabs: {
      display: 'flex',
      justifyContent: isMobile? 'center':'space-between',
      alignItems: 'center',
      flexDirection: isMobile? 'column':'row',
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: isMobile? '1em':'1.35em',
      fontWeight: 400,
      color: 'white',
      width: 'auto',
      padding: '10px 5px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      margin: '0 15px',
    },
    enlace: {
      textDecoration: 'none',
      color: 'inherit'
    },
    tab: {
      color: 'white',
      fontSize: isMobile ? '0.75em' : '0.95em',
      '&:hover': {
        backgroundColor: '#f0f0f0',
        color: '#3f51b5',
      },
      fontFamily: "Nunito Sans",
    }
  };

  return (
    <Box sx={styles.menu}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          '& .MuiTabs-flexContainer': {
            display: 'flex',
            flexDirection: isMobile? 'column':'row',
            justifyContent: isMobile? 'center':'space-between',
            alignItems: 'center',
            background: 'linear-gradient(to right, #A9070790, #A90707)',

          }
        }}
      >
        <div style={styles.logo}>
          <a href='/' style={styles.enlace}>Departamento de <br />Informática y Sistemas</a>
        </div>
        <div style={styles.tabs}>
          <Tab
            component={Link}
            to="/carrera"
            value="one" label="Carrera"
            sx={styles.tab}
          />
          <Tab
            component={Link}
            to="/carrera"
            value="two" label="Estudiantes Nuevos"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/estudiantes-regulares"
            value="three" label="Estudiantes Regulares"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/docentes"
            value="four" label="Docentes"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/graduados"
            value="five" label="Graduados"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/ext-inv"
            value="six" label="Ext-Invest"
            sx={styles.tab} />
        </div>
      </Tabs>
    </Box>
  );
}