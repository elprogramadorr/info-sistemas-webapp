import React, { useState } from 'react';
import { Table, TextField, TableBody, Checkbox, TableCell, TableContainer, TableHead, TableRow, Paper, FormGroup, FormControlLabel } from '@mui/material';
import Autocomplete from '../../utils/Autocomplete';

function createData(name, modalidad, area, carrera, tutor) {
    return { name, modalidad, area, carrera, tutor };
}

const rows = [
    createData('Sistema de riego automático', 'Proyecto de grado', 'IOT', 'Ing. Sistemas', 'Ing. Boris Calancha'),
    createData('Comparación de algoritmos con el método Taylor', 'Tesis', 'Ciencias de la computación', 'Ing. Informática', 'Ing. Leticia Blanco'),
    createData('Sistema de percepción y detección automática', 'Proyecto de grado', 'Inteligencia Artificial', 'Ing. Informática', 'Ing. Carmen Rosa'),
    createData('Plataforma para la comunicación y la accesibilidad de personas sordas en Bolivia.', 'Proyecto de grado', 'Desarrollo de software', 'Ing Sistemas', 'Ing. Corina Flores'),
    createData('Automatización de pruebas en contenedores virtuales', 'Adscripción', 'Desarrollo de software', 'Ing. Sistemas', 'Ing. Rosemary Torrico'),
];

const BuscadorProyectos = () => {
    const [selectedAreas, setSelectedAreas] = useState([]);
    
    const handleCheckboxChange = (event) => {
        const value = event.target.name;
        setSelectedAreas((prevSelected) => 
            prevSelected.includes(value) 
                ? prevSelected.filter((area) => area !== value) 
                : [...prevSelected, value]
        );
    };

    const filteredRows = rows.filter((row) => 
        selectedAreas.length === 0 || selectedAreas.includes(row.area)
    );

    const customStyles = {
        root: {
            '& label.Mui-focused': {
                color: 'blue',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
            },
            '& .MuiInputLabel-root': {
                color: 'white',
            },
            '& .MuiInputBase-input': {
                color: 'white',
            },
        },
    };

    return (
        <div>
            <h1>Buscador de Proyectos</h1>
            <div style={{ display: 'flex', marginBottom: '2rem', backgroundColor: 'transparent', padding: '20px', borderRadius: '20px', justifyContent: 'space-around' }}>
                <div>
                    <h4>Área</h4>
                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox style={{ color: 'white' }} name="IOT" onChange={handleCheckboxChange} />} 
                            label="IOT" 
                        />
                        <FormControlLabel 
                            control={<Checkbox style={{ color: 'white' }} name="Ciencias de la computación" onChange={handleCheckboxChange} />} 
                            label="Ciencias de la computación" 
                        />
                        <FormControlLabel 
                            control={<Checkbox style={{ color: 'white' }} name="Inteligencia Artificial" onChange={handleCheckboxChange} />} 
                            label="Inteligencia Artificial" 
                        />
                        <FormControlLabel 
                            control={<Checkbox style={{ color: 'white' }} name="Desarrollo de software" onChange={handleCheckboxChange} />} 
                            label="Desarrollo de software" 
                        />
                        <FormControlLabel 
                            control={<Checkbox style={{ color: 'white' }} name="Base de datos" onChange={handleCheckboxChange} />} 
                            label="Base de datos" 
                        />
                        <FormControlLabel 
                            control={<Checkbox style={{ color: 'white' }} name="Redes y software de base" onChange={handleCheckboxChange} />} 
                            label="Redes y software de base" 
                        />
                    </FormGroup>
                </div>
                <div>
                    <h4>Fechas</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
                        <TextField
                            id="date"
                            label="Fecha inicio"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                                style: { color: 'white' }
                            }}
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            sx={customStyles.root}
                            style={{ padding: '10px', borderRadius: '5px', fontFamily: 'Nunito Sans', }}
                        />
                        <TextField
                            id="date"
                            label="Fecha fin"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                                style: { color: 'white' }
                            }}
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            sx={customStyles.root}
                            style={{ padding: '10px', borderRadius: '5px', fontFamily: 'Nunito Sans' }}
                        />
                    </div>
                    <div>
                        <h4>Subárea</h4>
                        <Autocomplete />
                    </div>
                </div>
            </div>
            <div className='tablita' style={{ display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper} style={{ width: '80%', backgroundColor: '#A8CAFF', }}>
                    <Table sx={{ minWidth: 450, maxWidth: 1200 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Titulo del proyecto</TableCell>
                                <TableCell align="left">Modalidad</TableCell>
                                <TableCell align="left">Área</TableCell>
                                <TableCell align="left">Carrera</TableCell>
                                <TableCell align="left">Tutor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="left">{row.modalidad}</TableCell>
                                    <TableCell align="left">{row.area}</TableCell>
                                    <TableCell align="left">{row.carrera}</TableCell>
                                    <TableCell align="left">{row.tutor}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default BuscadorProyectos;
