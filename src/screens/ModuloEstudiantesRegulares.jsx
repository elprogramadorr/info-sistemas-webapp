import { useState } from "react";
import Layout from "./Layout";
import DropdownMenu from "../utils/DropdownMenu";
import { Button } from "@mui/material";
import MigaDePan from "../utils/MigaDePan";

function DropdownItem({ text }) {
    const [isPressed, setIsPressed] = useState(false);
    localStorage.setItem('isPressedEstRegular', false);
    const styles = {
        padding: 4, 
        textTransform: 'none', 
        justifyContent: 'left', 
        color: 'black', 
        backgroundColor: isPressed ? 'gray' : 'white'
    }
    return (
        <Button
            style={styles}
            onClick={() => { setIsPressed(!isPressed); localStorage.setItem('segundoNivelEstRegulares', text) }}>
            {text}
        </Button>
    );
}

const EstudiantesRegulares = () => {
    return (
        <>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' }}>
                <div >
                    <DropdownMenu label="Inscripciones">
                        <DropdownItem text="Fechas" />
                        <DropdownItem text="Requisitos" />
                        <DropdownItem text="Proceso" />
                    </DropdownMenu>
                    <DropdownMenu label="Trámites">
                        <DropdownItem text="Auxiliaturas" />
                        <DropdownItem text="Cambio de carrera" />
                        <DropdownItem text="Solicitud para trabajo dirigido" />
                        <DropdownItem text="Registro de tema de perfil" />
                        <DropdownItem text="Defensa pública" />
                    </DropdownMenu>
                    <DropdownMenu label="Documentos">
                        <DropdownItem text="Guías de elaboración" />
                        <DropdownItem text="Certificaciones de solvencia" />
                        <DropdownItem text="Titulación" />
                    </DropdownMenu>
                    <DropdownMenu label="Proyectos de fin de carrera">
                        <DropdownItem text="Banco de temas disponibles" />
                        <DropdownItem text="Buscador de proyectos" />
                        <DropdownItem text="Convocatorias" />
                    </DropdownMenu>
                </div>
                <MigaDePan></MigaDePan>
            </div>
        </>
    );
}
export default EstudiantesRegulares;