
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Footer(){
    return(
        <>
            <Box sx={{bgcolor:'gray', height:'30px', padding:"10px"}}>
                <Typography sx={{textAlign:"center"}}>Copyright 2024 | All Rights Reserved </Typography>
            </Box>
        </>
    )
}

export default Footer;