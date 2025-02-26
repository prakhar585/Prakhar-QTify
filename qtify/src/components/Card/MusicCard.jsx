import React from "react";
import { Card, CardMedia, CardContent, Chip, Box } from "@mui/material";
import demoImg from "./../../assets/test-card.png";
import "./MusicCard.css";

const MusicCard = ({ album }) => {
  
//album from music card is unknowingly becoming undefined
  
  return (
    <div>
      <Card className="Card">
        <Box className="inside-container-card">
          <CardMedia
            sx={{ height: 170, width: 159 }}
            image={album.image || "https://via.placeholder.com/159x170"}
            title={album.title || "No Title Available"}
          />
          <Box className="content-container">
            <Chip label={album.follows?(`${album.follows} Follows`):`${album.likes} likes`} className="chip" />
          </Box>
        </Box>
        <Box className="footer-text">{album.title}</Box>
      </Card>
    </div>
  );
};

export default MusicCard;

/*
    big container
    width: 159px;
    height:232px;
    gap:6px;

    small container:
    width:159px;
    height:205px;
    top right and left radius: 10px;
    background color: white;
    
    image container inside small container:
    width:159px;
    height:170px;
    top right and left radius: 10px;

    chip below the image
    width: 71;
    height: 23;
    top: 176px;
    left: 8px;
    gap: 1px;
    border-radius: 10px;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;

    last text:
    width: 130px;
    height: 21px;

    typography:
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0px;




*/
