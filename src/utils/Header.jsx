import * as React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Header() {
  const [value, setValue] = React.useState('one');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:1000px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const styles = {
    menu: {
      width: '100%',
      borderBottom: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-between',
    },
    appBar: {
      background: 'linear-gradient(to right, #A9070790, #A90707)',
      display: 'flex',
      justifyContent: 'space-between',
    },
    tabsContainer: {
      '& .MuiTabs-flexContainer': {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
      }
    },
    tabs: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'space-between',
      alignItems: 'center',
      flexDirection: isMobile ? 'column' : 'row',
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: isMobile ? '1em' : '1.35em',
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
    },
    hamburger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      color: 'white',
    },
    mobileMenu: {
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#A90707',
      position: 'absolute',
      top: '60px',
      left: 0,
      zIndex: 1,
    }
  };

  return (
    <Box sx={styles.menu}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar style={{display: 'flex',
      justifyContent: 'space-between',}}>
          <div style={styles.logo}>
            <a href='/' style={styles.enlace}>Departamento de <br />Informática y Sistemas</a>
          </div>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={styles.hamburger}
                onClick={handleMenuToggle}
              >
                <MenuIcon />
              </IconButton>
              <div style={styles.mobileMenu}>
                <Tab component={Link} to="/carrera" value="one" label="Carrera" sx={styles.tab} onClick={handleMenuToggle} />
                <Tab component={Link} to="/estudiantes-nuevos" value="two" label="Estudiantes Nuevos" sx={styles.tab} onClick={handleMenuToggle} />
                <Tab component={Link} to="/estudiantes-regulares" value="three" label="Estudiantes Regulares" sx={styles.tab} onClick={handleMenuToggle} />
                <Tab component={Link} to="/docentes" value="four" label="Docentes" sx={styles.tab} onClick={handleMenuToggle} />
                <Tab component={Link} to="/graduados" value="five" label="Graduados" sx={styles.tab} onClick={handleMenuToggle} />
                <Tab component={Link} to="/ext-inv" value="six" label="Ext-Invest" sx={styles.tab} onClick={handleMenuToggle} />
              </div>
            </>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              sx={styles.tabsContainer}
            >
              <div style={styles.tabs}>
                <Tab component={Link} to="/carrera" value="one" label="Carrera" sx={styles.tab} />
                <Tab component={Link} to="/estudiantes-nuevos" value="two" label="Estudiantes Nuevos" sx={styles.tab} />
                <Tab component={Link} to="/estudiantes-regulares" value="three" label="Estudiantes Regulares" sx={styles.tab} />
                <Tab component={Link} to="/docentes" value="four" label="Docentes" sx={styles.tab} />
                <Tab component={Link} to="/graduados" value="five" label="Graduados" sx={styles.tab} />
                <Tab component={Link} to="/ext-inv" value="six" label="Ext-Invest" sx={styles.tab} />
              </div>
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
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
            backgroundColor: '#FF000040',

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
            to="/estudiantes-nuevos"
            value="two" label="Estudiantes Nuevos"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/estudiantes-regulares"
            value="three" label="Estudiantes Regulares"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/carrera"
            value="four" label="Docentes"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/carrera"
            value="five" label="Graduados"
            sx={styles.tab} />
          <Tab
            component={Link}
            to="/carrera"
            value="six" label="Ext-Invest"
            sx={styles.tab} />
        </div>
      </Tabs>
    </Box>
  );
}
