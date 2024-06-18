import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Header() {
  const [value, setValue] = React.useState('one');

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
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1a237e',
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.35em',
      fontWeight: 400,
      color: 'white',
      width: 'auto',
      padding: '10px 5px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    enlace: {
      textDecoration: 'none',
      color: 'inherit'
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
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FF000040',
    
          }
        }}
      >
        <div style={styles.logo}>
          <a href='' style={styles.enlace}>Departamento de <br />Informática y Sistemas</a>
        </div>
        <div>
          <Tab value="one" label="Carrera" sx={{ color: 'white' }} />
          <Tab value="two" label="Estudiantes Nuevos" sx={{ color: 'white' }} />
          <Tab value="three" label="Estudiantes Regulares" sx={{ color: 'white' }} />
          <Tab value="four" label="Docentes" sx={{ color: 'white' }} />
          <Tab value="five" label="Graduados" sx={{ color: 'white' }} />
          <Tab value="six" label="Extensión-Investigación" sx={{ color: 'white' }} />
        </div>
      </Tabs>
    </Box>
  );
}