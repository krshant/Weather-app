import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = (props) => {
    return (
        <Paper  
            component="form"
            sx={{ p: '2px 4px', display: 'flex', width: 500, m:'0 auto'}}
        >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter city here"
              value={props?.locationKeyword}
              onChange={(e) => props?.setLocationKeyword(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon onClick={() => props?.getWeatherInfo(false, "")}/>
            </IconButton>
        </Paper>
    )
}
export default SearchComponent

