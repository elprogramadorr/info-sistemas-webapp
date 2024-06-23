import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImageZoom from "react-image-zooom";

export default function MapUMSS() {
  return (
    <div >
        <ImageZoom 
            src={"/public/mapa FCYT.png"}
            alt={"mapa de la universidad Facultad de Ciencias y Tecnologia"}
            loading="lazy"
            zoom="400"
            width="400px"
          />
    </div>
        
    
  );
}