import Box from "@mui/material/Box";

function Weatherdata({citySelectedData}){
    return(
        <Box>
            <Box className="content">
             <p>City Name: {citySelectedData?.name}</p>
             <p>Temprature: {citySelectedData?.main?.temp}</p>
             <p>Sunrise: {citySelectedData?.sys?.sunrise}</p>
             <p>Sunset: {citySelectedData?.sys?.sunset}</p>
             {/* <p>Description: {citySelectedData?.weather[0]?.description}</p>*/}
         </Box>
        </Box>
    )
}

export default Weatherdata;