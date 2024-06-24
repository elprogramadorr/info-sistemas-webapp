import * as React from 'react';
import { useState } from "react";
import Layout from "../Layout";
import DropdownMenu from "../../utils/DropdownMenu";
import { Button, Popper } from "@mui/material";
import MigaDePan from "../../utils/BreadcrumbsNuevo";
import CursoPreuniversitario from "./MENpreuniversitario";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import MapIcon from '@mui/icons-material/Map';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from "@mui/material/IconButton";
import Popover from '@mui/material/Popover';
import MapUMSS from './mapa';
import Chat from './chat';
import MayorPromedio from './MENExelencia';
import Paginacion from './MENpaginacion';

function DropdownItem({ text,mesage,content,bread,listaL }) {
    
    const styles = {
        padding: 4, 
        textTransform: 'none', 
        justifyContent: 'left', 
        color: 'black', 
        //backgroundColor: isPressed ? 'gray' : 'white'
    }
    
    return (
        <Button
            style={styles}
            onClick={() =>
                {mesage(content);
                bread(listaL);
                }
            }>
            {text}
        </Button>
    );
}

const EstudiantesRegulares = () => {
    const [mesage,setMesage]=useState('Cras vehicula iaculis justo, sed varius augue tincidunt et. Proin pretium leo quis odio ullamcorper, quis blandit justo facilisis. Praesent at ex sit amet mi porttitor laoreet ut in nunc. Pellentesque id orci eu ex iaculis tempor quis id nisl. Quisque sagittis cursus mauris quis gravida. Donec tincidunt elit eget purus dignissim, in porttitor turpis laoreet. Curabitur vitae est quis leo efficitur scelerisque. Nulla vestibulum, ante id lobortis auctor, justo ex ultrices mauris, et tincidunt enim sapien luctus nibh.');
    const [lista,setLista]=useState([{"/":"Home"},{"/estudiantes-nuevos":"Estudiantes nuevos"}])
    const ListaOriginal=[{"/":"Home"},{"/estudiantes-nuevos":"Estudiantes Nuevos"}]
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const style={
        position: 'fixed',
        bottom: '100px',
        right: '50px'}


    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2= () => {
        setAnchorEl2(null);
    };
    
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;
    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? 'simple-popover' : undefined;
    return (
        <Box sx={{ flexGrow: 1 }}>
        
       
        <Grid container spacing={4} pt={5}>
            <Grid item sx={4} >
                    <DropdownMenu label="Admision">
                        <DropdownItem text="Curso Preuniversitario" mesage={setMesage} 
                        content={<CursoPreuniversitario></CursoPreuniversitario>}
                        bread={setLista}
                        listaL={[...ListaOriginal,{"/notiene":"Curso Preuniversitario"}]}
                        />
                        <DropdownItem text="Mayor Promedio Estudiantil" 
                        mesage={setMesage} 
                        content={<MayorPromedio></MayorPromedio>}
                        bread={setLista}
                        listaL={[...ListaOriginal,{"/notiene":"Promedio Estudiantil"}]}
                        />
                    </DropdownMenu>

                    <DropdownMenu label="Preguntas Frecuentes">
                    <DropdownItem text="Preguntas" 
                        mesage={setMesage} 
                        content={<Paginacion></Paginacion>}
                        bread={setLista}
                        listaL={[...ListaOriginal,{"/notiene":"Preguntas"}]}
                        />
                    </DropdownMenu>
                    
            </Grid>
                
            <Grid item xs={11} md={8}>
                
                    <MigaDePan lista ={lista}>
                    </MigaDePan>
                    <Box pl={10} pt={10}>
                    <Typography style={{'overflowWrap': 'break-word'}}>
                        {mesage}
                    </Typography>
                    </Box>
            </Grid>

            
                <Grid item style={style} xs={1} md={1}>
                  <Stack spacing={1} textAlign={'center'}>
                  <IconButton color="primary" te onClick={handleClick1}>
                    <MapIcon fontSize="large" ></MapIcon>
                    </IconButton>
                    Mapa
                   <IconButton color="primary" onClick={handleClick2}> 
                   <QuestionAnswerIcon fontSize="large"></QuestionAnswerIcon>
                   </IconButton>
                   Chat
                   <Popover
                    id={id1}
                    open={open1}
                    anchorEl={anchorEl1}
                    onClose={handleClose1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 400,
                        horizontal: 400,
                      }}
                    >
                        
                        <MapUMSS></MapUMSS>
                    </Popover>  
                    <Popover
                    id={id2}
                    open={open2}
                    anchorEl={anchorEl2}
                    onClose={handleClose2}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: 400,
                      }}
                    >
                        
                        <Chat></Chat>
                    </Popover>  
                </Stack>  
                
                </Grid>
                
            
                

             
        </Grid>   
         
        </Box>
        
    );
}

export default EstudiantesRegulares;