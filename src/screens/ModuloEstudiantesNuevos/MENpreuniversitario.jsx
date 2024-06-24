import React from 'react';
import { Box } from '@mui/system';



function CursoPreuniversitario(){
    return (<Box>
        <h1>Admision por curso  preuniversitario</h1>
        <p>La admision por curso preuniversitario es una modalidad, permite a los postulantes bachilleres, iniciar su ciclo unervitario
            mediante un proceso formativo dirigido a fortalecer sus conocimientos,
            mejorar sus capacidades cognoscitivas y desarrollar sus aptitudes para realizar estudios superiores.
        </p>   
        <div style={{'display':'flex','justifyContent':'center'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kl-ZqibWvlg?si=WwMkw9-WBpk0W0vD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </div>
        <div >
        <p>La url para realizar tu proceso de admision :&nbsp; &nbsp;<span><a href='http://admision.fcyt.umss.edu.bo' style={{'color':'white'}}>Admsion FCYT</a></span></p>
        </div>
    </Box>
);
}
export default CursoPreuniversitario;