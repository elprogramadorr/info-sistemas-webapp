import { useState } from "react";
import DropdownMenu from "../utils/DropdownMenu";
import { Button } from "@mui/material";
import MigaDePan from "../utils/MigaDePan";

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
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (text) => {
        setSelectedItem(text);
        localStorage.setItem('segundoNivelEstRegulares', text);
    }

    return (
        <>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                    <DropdownMenu label="Inscripciones">
                        <DropdownItem text="Fechas" isSelected={selectedItem === "Fechas"} onClick={() => handleItemClick("Fechas")} />
                        <DropdownItem text="Requisitos" isSelected={selectedItem === "Requisitos"} onClick={() => handleItemClick("Requisitos")} />
                        <DropdownItem text="Proceso" isSelected={selectedItem === "Proceso"} onClick={() => handleItemClick("Proceso")} />
                    </DropdownMenu>
                    <DropdownMenu label="Trámites">
                        <DropdownItem text="Auxiliaturas" isSelected={selectedItem === "Auxiliaturas"} onClick={() => handleItemClick("Auxiliaturas")} />
                        <DropdownItem text="Cambio de carrera" isSelected={selectedItem === "Cambio de carrera"} onClick={() => handleItemClick("Cambio de carrera")} />
                        <DropdownItem text="Solicitud para trabajo dirigido" isSelected={selectedItem === "Solicitud para trabajo dirigido"} onClick={() => handleItemClick("Solicitud para trabajo dirigido")} />
                        <DropdownItem text="Registro de tema de perfil" isSelected={selectedItem === "Registro de tema de perfil"} onClick={() => handleItemClick("Registro de tema de perfil")} />
                        <DropdownItem text="Defensa pública" isSelected={selectedItem === "Defensa pública"} onClick={() => handleItemClick("Defensa pública")} />
                    </DropdownMenu>
                    <DropdownMenu label="Documentos">
                        <DropdownItem text="Guías de elaboración" isSelected={selectedItem === "Guías de elaboración"} onClick={() => handleItemClick("Guías de elaboración")} />
                        <DropdownItem text="Certificaciones de solvencia" isSelected={selectedItem === "Certificaciones de solvencia"} onClick={() => handleItemClick("Certificaciones de solvencia")} />
                        <DropdownItem text="Titulación" isSelected={selectedItem === "Titulación"} onClick={() => handleItemClick("Titulación")} />
                    </DropdownMenu>
                    <DropdownMenu label="Proyectos de fin de carrera">
                        <DropdownItem text="Banco de temas disponibles" isSelected={selectedItem === "Banco de temas disponibles"} onClick={() => handleItemClick("Banco de temas disponibles")} />
                        <DropdownItem text="Buscador de proyectos" isSelected={selectedItem === "Buscador de proyectos"} onClick={() => handleItemClick("Buscador de proyectos")} />
                        <DropdownItem text="Convocatorias" isSelected={selectedItem === "Convocatorias"} onClick={() => handleItemClick("Convocatorias")} />
                    </DropdownMenu>
                </div>
                <MigaDePan></MigaDePan>
            </div>
        </>
    );
}

export default EstudiantesRegulares;
