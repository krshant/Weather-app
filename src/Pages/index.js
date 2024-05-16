import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import SearchComponent from "./Components/search";
import Footer from "./footer";
import Weatherdata from "./Components/weatherList";
import axios from "axios";

function Pages() {
  const [locationInfo, setLocationInfo] = useState({});
  const [locationKeyword, setLocationKeyword] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");

  // Function for fetch location information
  const getWeatherInfo = async (key, text) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        key ? text : locationKeyword
      },india&appid=c9e665c7ee66f8e8f8f64cc1fcdc165b`
    );
    const json = await res.json();
    console.log("json", json);
    setLocationInfo(json);
  };

  useEffect(() => {
    if (city?.length) {
      getWeatherInfo(true, city);
    }
  }, [city]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error obtaining geolocation", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const fetchCity = async () => {
        try {
          const response = await axios.get(
            "https://api.opencagedata.com/geocode/v1/json",
            {
              params: {
                q: `${latitude}+${longitude}`,
                key: "6777a4497a1046039b2620cf07abe11a",
              },
            }
          );
          const city = response.data.results[0].components.city;
          setCity(city);
          setLocationKeyword(city);
        } catch (error) {
          console.error("Error fetching city data", error);
        }
      };
      fetchCity();
    }
  }, [latitude, longitude]);

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
