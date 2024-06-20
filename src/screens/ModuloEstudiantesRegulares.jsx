import { useState } from "react";
import Layout from "./Layout";
import DropdownMenu from "../utils/DropdownMenu";
import { Button } from "@mui/material";

function DropdownItem({ text }) {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <Button style={{padding:4, textTransform:'none', justifyContent: 'left',color:'black'}} onClick={()=>{setIsPressed(true)}}>
            {text}
        </Button>
    );
}

const EstudiantesRegulares = () => {
    return (
        <>
        <div style={{marginTop:'1.5rem'}}>
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
        </>
    );
}
export default EstudiantesRegulares;