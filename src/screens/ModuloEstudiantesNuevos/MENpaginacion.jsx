import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PreguntasFrecuentes from './MENpreguntasFrecuentes';
import Pagination from '@mui/material/Pagination';

function Paginacion(){
    const [page, setPage] = React.useState(1);
    const lista=[{titulo:"¿Cuales son las areas que se evaluan para el ingreso en la facultad?",contenido:"En total son 5 areas evaluadas para el ingreso a la facultad de Ciencas y Tecnologias estas son Aritmética-Algebra, Geometría-Trigonometría, Física, Química y Biología"}
        ,{titulo:'¿Cual es la nota minima para aprobar por curso preuniversitario?',contenido:"La nota minima para aprobar mediante el uso de curso preuniversitario es 51 para cada una de las 5 areas"},
        {titulo:"Si repruebo el curso preuniversitario, ¿puedo tomar el examen de ingreso?",contenido:"Si, puedes probar ingresar mediante el examen de ingreso hay que tomar en cuenta que ambas opciones tiene un precio monetario"}, 
        {titulo:"¿Cual es la nota minima para aprobar por Examen de ingreso?",contenido:"La nota minima para aprobar mediante  el metodo de Examen de ingreso es de 51, este es el promedio de las 5 areas"},
        {titulo:"¿En que aulas se da el examen de ingreso para la facultad de ciencias y tecnologia?",contenido:"por lo general se dan en el edificio Academico, numero 38 en el mapa de la pagina"}
        ,{titulo:"Si repruebo el examen de admision, ¿Puedo dar otro examen?",contenido:"Si puedes tomar la cantidad de examenes igual a la cantidad de opciones que hay para la gestion, por lo general son 2 opciones"}
        ,{titulo:"¿En que lugares dejo mis documentos para mi inscripcion a la carrera?",contenido:"Los documentos se dejan en la DREI(Departamento de Registros e Inscripciones)"}
        ,{titulo:"¿Cuando se habilitan los metodos de Admision para la facultad?",contenido:"Los metodos para la admision, se habilitan antes de cada gestion en la facultad, en lo general estos son en los meses de Mayo para la Gestion I y Diciembre para la Gestion II"}
        ,{titulo:"¿Tengo que saber programar para ingresar a la carrera?",contenido:"No necesitas saber programar para ingresar, pero saber programa da ventaja para los primeros semestres, un lenguaje fuertemente orientado en objetos como Java es ideal"}
        ,{titulo:"¿Cuales son las aulas que tiene la facultad de Ciencias y Tecnologia?",contenido:"La pagina cuenta con un mapa, pero tambien puede descargar la aplicacion de Tecno Map para su celular"}
    ]
    
    
        const tamanio=Math.ceil((lista.length)/2);
    const ind=(page-1)*2
    console.log(ind)
    console.log(lista)
    let list=[]
    if (ind + 1 < lista.length) {
        list=[lista[ind],lista[ind+1]]
    }else{
        list=[lista[ind]]
    }

    
    const cambioPagina = (event, value) => {
        setPage(value);
      };
    return(
           <>
           <PreguntasFrecuentes
                       lis={list}
           ></PreguntasFrecuentes>
           <div><Pagination count={tamanio} color="primary" page={page} onChange={cambioPagina} sx={{
            '& > .MuiPagination-ul': {
            justifyContent: 'center',}
            ,'.css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root':{color:'white'}}}
            size='large'/>
            </div>
           </> 
    )

}

export default Paginacion;