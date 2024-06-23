import { useState } from "react";
import Layout from "./Layout";
import DropdownMenu from "../utils/DropdownMenu";
import { Button } from "@mui/material";
import MigaDePan from "../utils/BreadcrumbsNuevo";
import CursoPreuniversitario from "./MENpreuniversitario";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import MapIcon from '@mui/icons-material/Map';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';





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
    const style={
        position: 'fixed',
        bottom: '100px',
        right: '50px'}
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        
       
        <Grid container spacing={4} pt={5}>
            <Grid item sx={4} >
                    <DropdownMenu label="Admision">
                        <DropdownItem text="Curso Preuniversitario" mesage={setMesage} 
                        content={"Suspendisse lacinia finibus odio, a fringilla quam posuere ut. Donec eu libero nec risus finibus mollis. Suspendisse mattis at dolor quis venenatis. Ut sapien nisl, gravida vitae rutrum sed, malesuada quis nunc. Morbi vehicula sed ex a sodales. Sed ipsum dui, commodo vulputate placerat in, aliquam ut lacus. Integer odio neque, cursus sed nisl non, facilisis rhoncus eros. Nullam porttitor velit erat. Quisque odio ex, semper sed posuere at, malesuada pulvinar orci. Maecenas laoreet enim sit amet mi tristique dapibus. Pellentesque iaculis maximus leo, ut rutrum augue molestie nec."}
                        bread={setLista}
                        listaL={[...ListaOriginal,{"/notiene":"Curso Preuniversitario"}]}
                        />
                        <DropdownItem text="Mayor Promedio Estudiantil" 
                        mesage={setMesage} 
                        content={"Sed eget ligula risus. Donec eu elit lorem. Sed sed iaculis urna. Morbi eget finibus dui."}
                        bread={setLista}
                        listaL={[...ListaOriginal,{"/notiene":"Promedio Estudiantil"}]}
                        />
                    </DropdownMenu>

                    <DropdownMenu label="Preguntas Frecuentes">
                    <DropdownItem text="Preguntas" 
                        mesage={setMesage} 
                        content={"Sed eget ligula risus. finibus dui."}
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
                  <Stack spacing={2}>
                  <MapIcon fontSize="large"></MapIcon>
                    <QuestionAnswerIcon fontSize="large"></QuestionAnswerIcon>
                </Stack>  
                
                </Grid>
                
            
        

             
        </Grid>    
        </Box>
    );
}

export default EstudiantesRegulares;