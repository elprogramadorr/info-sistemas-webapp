import {useEffect, useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

function handleClick(event) {
    
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MigaDePan() {
    const navigation = useNavigate();
    const [primerNivel, setPrimerNivel] = useState(localStorage.getItem('primerNivelEstRegular'));
    const [segundoNivel, setSegundoNivel] = useState(localStorage.getItem('segundoNivelEstRegulares'));

    useEffect(()=> {
       setPrimerNivel(localStorage.getItem('primerNivelEstRegular'));
         setSegundoNivel(localStorage.getItem('segundoNivelEstRegulares'));
    }, [localStorage.getItem('primerNivelEstRegular'),  localStorage.getItem('segundoNivelEstRegulares') ])
    
  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" href="/" onClick={()=>navigation.navigate('Home')}>
        Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="white"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {localStorage.getItem('primerNivelEstRegular')}
    </Link>,
    <Typography key="3" color="white" style={{fontFamily:'Nunito Sans'}}>
      {localStorage.getItem('segundoNivelEstRegulares')}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ color: 'white' , fontFamily: "Nunito Sans"}}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
