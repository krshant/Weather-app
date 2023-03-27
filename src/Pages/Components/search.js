import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchComponent = (props) => {
    const { isSelected, setIsSelected, getWeather } = props

    const handleSelected = (val, selected) => {
        setIsSelected(selected)
        getWeather(selected)
    }

    return (
        <Autocomplete
            // disablePortal
            id="combo-box-demo"
            value={isSelected}
            options={CityList || []}
            getOptionLabel={(option) => option.name}
            onChange={(val, selected) => handleSelected(val, selected)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
        />

    )
}
export default SearchComponent

const CityList = [
    { id: 0, name: 'Kolkata' },
    { id: 1, name: 'Patna' },
    { id: 3, name: 'Delhi' },
    { id: 4, name: 'Mumbai' },
    { id: 5, name: 'Bangalore' },
    { id: 6, name: 'Hyderabad' },
    { id: 7, name: 'Chennai' },
    { id: 8, name: 'Ahmedabad' },
    { id: 9, name: 'Pune' },
    { id: 10, name: 'Bhopal' },
    { id: 11, name: 'Jaipur' },
    { id: 12, name: 'Varanasi' },
]
