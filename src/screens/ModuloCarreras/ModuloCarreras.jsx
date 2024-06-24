import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import EmailIcon from '@mui/icons-material/Email';
import DropdownMenu from '../../utils/DropdownMenu';
import Autoridades from './Autoridades';
import Consejo from './Consejo';
import Curriculum from './Curriculum';
function DropdownItem({ text, isSelected, onClick }) {
  const styles = {
    padding: 4,
    textTransform: 'none',
    justifyContent: 'left',
    color: 'black',
    backgroundColor: isSelected ? 'gray' : 'white'
  };

  return (
    <Button style={styles} onClick={onClick}>
      {text}
    </Button>
  );
}

const ModuloCarreras = () => {
  const [selectedItem, setSelectedItem] = useState('Fechas');
  const [showScrollIcons, setShowScrollIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      setShowScrollIcons(scrollHeight > clientHeight && scrollTop > 0);
    };

    handleScroll(); // Check on mount

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Check on resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const sty = {
    scrollIcon: {
      position: 'fixed',
      right: '20px',
      bottom: '10px',
      cursor: 'pointer',
      zIndex: 100,
      fontSize: '1rem',
      padding: '10px',
      border: '2px solid #ccc',
      borderRadius: '50%',
    },
    scrollIconTop: {
      position: 'fixed',
      right: '20px',
      bottom: '60px',
      cursor: 'pointer',
      zIndex: 100,
      fontSize: '1rem',
      padding: '10px',
      border: '2px solid #ccc',
      borderRadius: '50%',
    },
    containerStyle:{
      display: 'flex',
      marginTop: '1.5rem',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    sidebar: {
      flex: '0 0 280px',
      display: 'flex',
      flexDirection: 'column',
      //gap: '1rem',
    },
    content: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Nunito Sans',
    }
  }; 

  const handleItemClick = (text) => {
    setSelectedItem(text);
    localStorage.setItem('segundoNivelEstRegulares', text);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'Autoridades':
        return <Autoridades />;
      case 'Consejo de Carrera':
        return <Consejo />;
      case 'Malla Curricular':
        return <Curriculum/>;
      case 'Auxiliaturas':
        return <div>Auxiliaturas Dummy Content</div>;
      case 'Cambio de carrera':
        return <div>Cambio de carrera Dummy Content</div>;
      case 'Titulación':
        return <div>Titulación Dummy Content</div>;
      case 'Buscador de proyectos':
        return <div>Buscador de proyectos Dummy Content</div>;
      default:
        return <div>Construcción Dummy Content</div>;
    }
  };

  return (
    <>
      <div style={{ display: 'flex', marginTop: '1.5rem', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 280px', display: 'flex', flexDirection: 'column' }}>
          <DropdownMenu label="Estudio" defaultOpen={true}>
            <DropdownItem text="Malla Curricular" isSelected={selectedItem === 'Malla Curricular'} onClick={() => handleItemClick('Malla Curricular')} />
            <DropdownItem text="Mercado de Trabajo" isSelected={selectedItem === 'Mercado de Trabajo'} onClick={() => handleItemClick('Mercado de Trabajo')} />
            <DropdownItem text="Lineas de Estudio" isSelected={selectedItem === 'Lineas de Estudio'} onClick={() => handleItemClick('Lineas de Estudio')} />
          </DropdownMenu>
          <DropdownMenu label="Misión, Visión" defaultOpen={false}>
            <DropdownItem text="Misión, Visión" isSelected={selectedItem === 'Auxiliaturas'} onClick={() => handleItemClick('Auxiliaturas')} />
            <DropdownItem text="Objetivos" isSelected={selectedItem === 'Objetivos'} onClick={() => handleItemClick('Objetivos')} />
            <DropdownItem text="Historia" isSelected={selectedItem === 'Historia'} onClick={() => handleItemClick('Historia')} />
          </DropdownMenu>
          <DropdownMenu label="Autoridades" defaultOpen={false}>
            <DropdownItem text="Autoridades" isSelected={selectedItem === 'Autoridades'} onClick={() => handleItemClick('Autoridades')} />
            <DropdownItem text="Consejo de Carrera" isSelected={selectedItem === 'Consejo de Carrera'} onClick={() => handleItemClick('Consejo de Carrera')} />
          </DropdownMenu>
          <div style={{ marginLeft: '2rem' }}>
            <h3>Contactos</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <EmailIcon style={{ fontSize: '1.5rem', color: '#243761' }} />
              <a href="mailto:contactoDepartamento@gmail.com">contactoDepartamento@gmail.com</a>
            </div>
          </div>
        </div>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', fontFamily: 'Nunito Sans' }}>
          {renderContent()}
        </div>
      </div>
      
    </>
  );
};

export default ModuloCarreras;
