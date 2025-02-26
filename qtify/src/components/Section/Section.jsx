import React, { useState } from "react";
import "./Section.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid2";
import MusicCard from "../Card/MusicCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carousel from "../Carousel/Carousel";

const Section = ({ albumData, title, showButton, showTab, filterSongs }) => {
  const [showCarousel, setShowCarouse] = useState(false);
  const [genre, setGenre] = useState("all");
  
  const handleCarousel = () => {
    setShowCarouse(!showCarousel);
  };

  
  const handleChange=(value)=>{
    setGenre(value);
    filterSongs(value);//uplifting the value to filter    
  }


  

  return (
    <div className="section-container">
      <Box className="section-header">
        <h5>{title}</h5>
        <button
          className="header-button"
          onClick={handleCarousel}
          style={{ display: showButton ? "block" : "none" }}
        >
          {showCarousel ? "Collapse" : "Show all"}
        </button>
      </Box>
      {showTab &&
      <Box sx={{marginBottom:"10px",}}>
        <Tabs
          value={genre}
          onChange={(_, value) => handleChange(value)}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#34C94B',
            },
          }}
          sx={{
            "& .MuiTab-root": { color: "white" },
            "& .Mui-selected": { color: "white !important", fontFamily:"'Poppins', sans-serif" },
          }}
        >
          <Tab value="all" label="All"  />
          <Tab value="jazz" label="Jazz"  />
          <Tab value="rock" label="Rock"  />
          <Tab value="pop" label="Pop"  />
          <Tab value="blues" label="Blues"  />
        </Tabs>
      </Box>}

      {showCarousel ? (
        <Grid container spacing={1} columns={14}>
          {albumData.length > 0 ? (
            albumData.map((album) => (
              <Grid item key={album.id} lg={1}>
                <MusicCard album={album} />
              </Grid>
            ))
          ) : (
            <h1>Loading....</h1>
          )}
        </Grid>
      ) : (
        <Carousel albumData={albumData}></Carousel>
      )}
    </div>
  );
};

export default Section;
