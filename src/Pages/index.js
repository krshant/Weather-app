import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import SearchComponent from "./Components/search";
import Footer from "./footer";
import Weatherdata from "./Components/weatherList";

function Pages() {
  const [locationInfo, setLocationInfo] = useState({});
  const [locationKeyword, setLocationKeyword] = useState("");

  // Function for fetch location information 
  const getWeatherInfo = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationKeyword},india&appid=c9e665c7ee66f8e8f8f64cc1fcdc165b`
    );
    const json = await res.json();
    console.log("json", json);
    setLocationInfo(json);
  };

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        m: "0px auto",
        width: "80%",
        bgcolor: "#2ae899",
      }}
    >
      <Grid container spacing={0}>
        <Grid xs={12} md={12}>
          <Box>
            <Box sx={{ display: "flex", padding: "6px" }}>
              <Typography
                sx={{ fontSize: "30px", m: "0 auto", fontFamily: "Georgia" }}
              >
                Weather Application
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={12}>
          <Box sx={{ bgcolor: "#33F5FF", height: "620px" }}>
            <Box sx={{ p: 3 }}>
              <SearchComponent
                locationKeyword={locationKeyword}
                setLocationKeyword={setLocationKeyword}
                getWeatherInfo={getWeatherInfo}
              />
            </Box>
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  height={360}
                  width={800}
                  my={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={3}
                  p={2}
                  sx={{
                    border: "2px solid white",
                    borderRadius: "10px",
                    bgcolor: "#ffffff",
                  }}
                >
                  <Weatherdata locationInfo={locationInfo} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Pages;
