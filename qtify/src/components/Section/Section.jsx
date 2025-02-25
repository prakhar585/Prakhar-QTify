import React, { useState } from "react";
import "./Section.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MusicCard from "../Card/MusicCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carousel from "../Carousel/Carousel";

const Section = ({ albumData, title }) => {
  const [showCarousel, setShowCarouse] = useState(false);


  const handleCarousel=()=>{
    setShowCarouse(!showCarousel);
  }
  
  
  return (
    // <Carousel albumData={albumData} />    
    <div className="section-container">
      <Box className="section-header">
        <h5>{title}</h5>
        <button className="header-button" onClick={handleCarousel}>{showCarousel?"Collapse":"Show all"}</button>
      </Box>
      {showCarousel ?(
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
        ):(<Carousel albumData={albumData}></Carousel>)}
    </div>
  );
};

export default Section;
