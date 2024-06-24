import {useEffect, useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

function handleClick(event) {
    
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MigaDePan(lista) {
  const itemd=Object.values(lista)[0] //ni idea, pero supongo es el manejo de objetos que para evitar problemsa servidor-cliente
  const breadcrumbs = []
  let i=0
  while (i < itemd.length-1){
    let valor=Object.values(itemd[i])
    let llave=Object.keys(itemd[i])
    breadcrumbs.push(<Link underline="hover" key={i} color="white" href={llave} >
      {valor}</Link>)
      i=i+1;
  }
  breadcrumbs.push(<Typography key={i} color="white">
  {Object.values(itemd[i])}
  </Typography>)

  return (
      <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ color: 'white' }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      
      </>
  );
}
