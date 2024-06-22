import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const DropdownNormal = ({ label, items, onChange }) => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
        onChange && onChange(event.target.value);
    };

    return (
        <FormControl variant='standard' sx={{ m: 1, minWidth: 250, backgroundColor: 'white', padding: '10px', borderRadius:'5px' }}>
            <InputLabel id="demo-simple-select-label" style={{ fontFamily: 'Nunito Sans'}}>{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedItem}
                label={label}
                onChange={handleChange}
                style={{ fontFamily: 'Nunito Sans',}}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default DropdownNormal;