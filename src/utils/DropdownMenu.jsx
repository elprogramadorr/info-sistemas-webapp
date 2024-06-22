// DropdownMenu.js
import React, { useState } from 'react';

function DropdownMenu({ label, children, defaultOpen}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleDropdown = () => {
    //if(localStorage.getItem('isPressedEstRegular') === 'false') {
        setIsOpen(!isOpen);
        localStorage.setItem('primerNivelEstRegular', label);
    //}
    
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
    //   boxShadow: '0px 3px 16px 0px #F2F2F2',
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
      </button>
      {isOpen && (
        <div style={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
