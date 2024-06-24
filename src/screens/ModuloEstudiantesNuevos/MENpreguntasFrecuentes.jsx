import React from 'react';
import { Box} from '@mui/system';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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