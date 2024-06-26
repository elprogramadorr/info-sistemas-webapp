import React from 'react';
import { useState } from 'react';

import { Box } from '@mui/system';
import { Typography,List,ListItem,ListItemText,TextField } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { IconButton, Stack,Link,Divider } from '@mui/material';



   
    const chatSection= {
        width: '400px',
        height: '80vh'
    }
    
    const messageArea ={
        height: '60vh',
        overflowY: 'auto',
        padding:'10px',
        
        
    }
    const messageMe={
        display:"revert"
    }

const Chat = () => {
    const [message, setMessage] = useState('');
    //let message = '';
    const [chat, setChat] = useState([
        { from: 'AI', msg: 'Hola, En que te puedo Ayudar', time: '10:00' },
        { from: 'ME', msg: 'Sabes la fecha del examen de ingreso', time: '10:01' },
        { from: 'ME', msg: 'y cuanto cuesta', time: '11:01' },

    ])
    function handleChange(event) {
        setMessage(event.target.value);
    }
    function keyPress(e) {
        if (e.keyCode == 13) {
            addMessage(message) 

        }
    }
    
    function addMessage(msg) {

        if (msg.trim() === '') return
        const time = new Date().toLocaleTimeString().slice(0, 5)
        let from='Me'
        setChat([...chat, { from, msg, time },{from:'AI', msg:"resp: "+msg, time }])
        
        setMessage('')
        

    }
    return (
        <Box style={chatSection} > 
        <Typography align='center'>ChatBot</Typography>
        <Divider />
            <List style={messageArea}>
                        {chat.map((c, i) =>
                        <Stack>
                            <ListItem key={i} style={messageMe} >
                                
                                        <ListItemText align={c.from === 'AI' ? 'left' : 'right'} primary={c.msg} ></ListItemText>
                                    
                                        <ListItemText align={c.from === 'AI' ? 'left' : 'right'} secondary={c.from + ' at ' + c.time}></ListItemText>
                                  
                            </ListItem>
                        </Stack>
                        )}

            </List>

            <Divider />
            <TextField id="outlined-basic-email" InputProps={{}} onChange={handleChange} onKeyDown={keyPress} value={message} label="Escribe algo.." style={{width:"85%"}}/>
             <IconButton color="primary" onClick={() =>addMessage(message)} aria-label="add"><SendIcon /></IconButton >
             <Divider />
             <Link justifyContent={'center'}>
             <Typography align='center'>Contactenos</Typography>
                
             </Link>
             
             
             
            </Box>
        );
}

export default Chat;