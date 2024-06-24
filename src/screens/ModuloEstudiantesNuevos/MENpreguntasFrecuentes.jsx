import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PreguntasFrecuentes({lis}){
    console.log(lis)
    const listItems = lis.map(({titulo,contenido}) =>  
        <Box style={{'width':'40%','display': 'inline-block','margin': '2%','height':'80%'}}>
            <Card >
                    <CardContent style={{'height':'280px'}} >
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {contenido}
                    </Typography>
                    </CardContent>
               
            </Card>
        </Box>
    );
    return (<div style={{'display': 'flex',
        'justify-content': 'center'}}>
       {listItems}
       
        </div>
        
        );
        }
        export default PreguntasFrecuentes;