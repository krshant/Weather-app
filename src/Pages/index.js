import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import SearchComponent from "./Components/search";
import Footer from "./footer";
import Weatherdata from "./Components/weatherList";

function Pages() {
  const [cityName, setCityName] = useState({ id: "", name: "kolkata" });
  const [citySelectedData, setCitySelectedData] = useState({});

  useEffect(() => {
    getWeather(cityName);
  }, []);

  const getWeather = async (value) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value?.name},india&appid=c9e665c7ee66f8e8f8f64cc1fcdc165b`
    );
    const json = await res.json();
    setCitySelectedData(json);
    console.log("json", json);
  };
  return (
    <Box sx={{ maxWidth: "1440px", m: "0px auto", width: "80%" }}>
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
            <Box sx={{p:3}}>
            <SearchComponent
              isSelected={cityName}
              setIsSelected={setCityName}
              getWeather={getWeather}
            />
            </Box>
            <Box>
            <Weatherdata citySelectedData={citySelectedData} />
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
