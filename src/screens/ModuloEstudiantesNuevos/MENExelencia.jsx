import React from 'react';
import { Box } from '@mui/system';


function MayorPromedio(){
    return (<Box>
        <h1>Admision por Mayor Promedio Academico</h1>
        <p>
        Estarán habilitados un hombre y una mujer por colegio, que cuenten con el mejor rendimiento académico de colegios fiscales, particulares y de convenio del Departamento de Cochabamba. Para acceder a través de admisión directa a la Universidad Mayor de San Simón. Se deberán considerar las siguientes excepciones:
        <ul>
            <li>No contempla la Admisión a las carreras del área de salud (Medicina, Fisioterapia, Nutrición, Bioquímica, Odontología y Enfermería)</li>
            <li>Para las carreras de Psicología y Trabajo Social previamente deben realizar su test de personalidad (Oficina Educativa de la Facultad de Humanidades).</li>
            <li>Para el Programa de Licenciatura en Ciencias de la Actividad Física y del Deporte previamente deben realizar su Prueba de Suficiencia Fisica (Oficina Educativa de la Facultad de Humanidades).</li>
            <li>Programa de Licenciatura en Música requieren previamente una Entrevista de admisión (Oficina Educativa de la Facultad de Humanidades).</li>
        </ul>
         </p>    
         <div style={{'display':'flex','justifyContent':'center'}}>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/HfZw1AWswB4?si=ep846EgQyBMhxcTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
         <div >
        <p>La url para realizar tu proceso de admision :&nbsp; &nbsp;<span><a href='https://disu.umss.edu.bo/' style={{'color':'white'}}>Admsion FCYT</a></span></p>
        </div>
    </Box>
);
}
export default MayorPromedio;