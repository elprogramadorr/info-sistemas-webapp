// DropdownMenu.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu({ label, children, defaultOpen}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleDropdown = () => {
        setIsOpen(!isOpen);
        localStorage.setItem('primerNivelEstRegular', label);
        console.log("es ")
    
  };

  const styles = {
    dropdown: {
      marginLeft: '2rem',
      
    },
    dropdownButton: {
      backgroundColor: '#243761',
      width: '280px',
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      cursor: 'pointer',
      border: '1px solid white',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: "Nunito Sans",
    },
    dropdownContent: {
      backgroundColor: '#f9f9f9',
      maxWidth: '248px',
      zIndex: '1',
      color: 'black',
      padding: '10px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
    },
    dropdownItem: {
      color: 'black',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },
  };	
  return (
    <div style={styles.dropdown}>
      <button style={styles.dropdownButton} onClick={toggleDropdown}>
        {label}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      {isOpen && children!==undefined && (
        <div style={styles.dropdownContent}>
          {children}
        </div>
      )}
      
    </div>
    
  );
}

export default DropdownMenu;
