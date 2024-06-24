import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { FormControl, FormLabel } from '@mui/material';

function Form1(){
    return(
        <>
    <FormControl>
        <FormLabel>Gestión:</FormLabel>
        <TextField></TextField>
        <Button>Submit</Button>
    </FormControl></>)
}

export default  Form1