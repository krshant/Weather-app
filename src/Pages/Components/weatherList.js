import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CloudIcon from "@mui/icons-material/Cloud";

function Weatherdata({ locationInfo }) {
  return (
    <Box>
      {/* <Typography>{locationInfo?.name}</Typography> */}
      <Box display="flex">
        <Typography variant="h2">
          <CloudIcon style={{ width: "140", height: "140" }} />{" "}
          {locationInfo?.clouds?.all}&deg;C
        </Typography>
      </Box>
      <Box>
        {locationInfo?.weather?.length ? (
          <Typography variant="h3">
            {locationInfo?.weather[0]?.main},&nbsp;{locationInfo?.name}
          </Typography>
        ) : (
          ""
        )}
      </Box>
      <Box>
        <Typography variant="subtitle2">
          Wind speed: {locationInfo?.wind?.speed} km/h
        </Typography>
      </Box>
    </Box>
  );
}

export default Weatherdata;
