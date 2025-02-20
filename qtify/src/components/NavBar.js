import React from "react";
import Logo from "./Logo";
import "./../components/NavBar.css";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";
function NavBar() {
  return (
    <Box className="nav-components">
      
      <Logo className="logo" />

      
      <form className="search">
        <TextField 
          className="search-input" 
          variant="outlined" 
          size="small"
          placeholder="Search"
        />
        <IconButton className="search-icon">
          <SearchIcon />
        </IconButton>
      </form>

      {/* Feedback Button */}
      <Button  className="feedback-button" text="Give FeedBack" onClick={null}/>
    </Box>
  );
}

export default NavBar;
