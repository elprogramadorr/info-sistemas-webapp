import { useState, useEffect } from "react";
import DropdownMenu from "../../utils/DropdownMenu";
import { Button } from "@mui/material";
import MigaDePan from "../../utils/MigaDePan";
import FechasScreen from "./FechasScreen";
import ProcesoScreen from "./ProcesoScreen";
import RequisitoScreen from "./RequisitoScreen.jsx";
import Construccion from "./Construccion.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import EmailIcon from '@mui/icons-material/Email';
import Auxiliaturas from "./Auxiliaturas.jsx";
import CambioCarrera from "./CambioCarrera.jsx";
import Titulacion from "./Titulacion.jsx";
import BuscadorProyectos from "./BuscadorProyectos.jsx";

function DropdownItem({ text, isSelected, onClick }) {
  const styles = {
    padding: 4,
    textTransform: 'none',
    justifyContent: 'left',
    color: 'black',
    backgroundColor: isSelected ? 'gray' : 'white'
  }
  return (
    <Button
      style={styles}
      onClick={onClick}>
      {text}
    </Button>
  );
}

const EstudiantesRegulares = () => {
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
  const handleItemClick = (text) => {
    setSelectedItem(text);
    localStorage.setItem('segundoNivelEstRegulares', text);
  }

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const renderContent = () => {
    if(selectedItem === null) {
      handleItemClick("Fechas");
      return <FechasScreen />
    }
    if (selectedItem === "Fechas") {
      return <FechasScreen />
    } else if (selectedItem === "Requisitos") {
      return <RequisitoScreen />
    } else if (selectedItem === "Proceso") {
      return  <ProcesoScreen />
    } else if (selectedItem === "Auxiliaturas") {
      return <Auxiliaturas />
    } else if (selectedItem === "Cambio de carrera") {
      return <CambioCarrera />
    } else if (selectedItem === "Titulación") {
      return <Titulacion />
    } else if (selectedItem === "Buscador de proyectos") {
      return <BuscadorProyectos/>
    } else {
      return <Construccion />
    }
  }

  return (
    <>
      <div style={sty.containerStyle}>
        <div style={sty.sidebar}>
          <DropdownMenu label="Inscripciones" defaultOpen={true}>
            <DropdownItem text="Fechas" isSelected={selectedItem === "Fechas"} onClick={() => handleItemClick("Fechas")} />
            <DropdownItem text="Requisitos" isSelected={selectedItem === "Requisitos"} onClick={() => handleItemClick("Requisitos")} />
            <DropdownItem text="Proceso" isSelected={selectedItem === "Proceso"} onClick={() => handleItemClick("Proceso")} />
          </DropdownMenu>
          <DropdownMenu label="Trámites" defaultOpen={false}>
            <DropdownItem text="Auxiliaturas" isSelected={selectedItem === "Auxiliaturas"} onClick={() => handleItemClick("Auxiliaturas")} />
            <DropdownItem text="Cambio de carrera" isSelected={selectedItem === "Cambio de carrera"} onClick={() => handleItemClick("Cambio de carrera")} />
            <DropdownItem text="Solicitud para trabajo dirigido" isSelected={selectedItem === "Solicitud para trabajo dirigido"} onClick={() => handleItemClick("Solicitud para trabajo dirigido")} />
            <DropdownItem text="Registro de tema de perfil" isSelected={selectedItem === "Registro de tema de perfil"} onClick={() => handleItemClick("Registro de tema de perfil")} />
            <DropdownItem text="Defensa pública" isSelected={selectedItem === "Defensa pública"} onClick={() => handleItemClick("Defensa pública")} />
          </DropdownMenu>
          <DropdownMenu label="Documentos" defaultOpen={false} >
            <DropdownItem text="Guías de elaboración" isSelected={selectedItem === "Guías de elaboración"} onClick={() => handleItemClick("Guías de elaboración")} />
            <DropdownItem text="Certificaciones de solvencia" isSelected={selectedItem === "Certificaciones de solvencia"} onClick={() => handleItemClick("Certificaciones de solvencia")} />
            <DropdownItem text="Titulación" isSelected={selectedItem === "Titulación"} onClick={() => handleItemClick("Titulación")} />
          </DropdownMenu>
          <DropdownMenu label="Proyectos de fin de carrera" defaultOpen={false} >
            <DropdownItem text="Banco de temas disponibles" isSelected={selectedItem === "Banco de temas disponibles"} onClick={() => handleItemClick("Banco de temas disponibles")} />
            <DropdownItem text="Buscador de proyectos" isSelected={selectedItem === "Buscador de proyectos"} onClick={() => handleItemClick("Buscador de proyectos")} />
            <DropdownItem text="Convocatorias" isSelected={selectedItem === "Convocatorias"} onClick={() => handleItemClick("Convocatorias")} />
          </DropdownMenu>
          <div style={{marginLeft:'2rem'}}>
            <h3>Contactos</h3>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
              <EmailIcon style={{fontSize: '1.5rem', color: '#243761'}} />
              <a href="mailto:contactoDepartamento@gmail.com">contactoDepartamento@gmail.com</a>
            </div>
          </div>
        </div>
        <div style={sty.content}>
          <MigaDePan/>
          <div>
            {renderContent()}
          </div>
        </div>
      </div>
      {showScrollIcons && (
        <>
        <FontAwesomeIcon 
        icon={faArrowUp} 
        style={sty.scrollIconTop} 
        onClick={scrollToTop} 
      />
        </>
      )}
      <FontAwesomeIcon 
        icon={faArrowDown} 
        style={sty.scrollIcon} 
        onClick={scrollToBottom} 
      />
    </>
  );
}

export default EstudiantesRegulares;
