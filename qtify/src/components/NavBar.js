import React from "react";
import Logo from "./Logo";
import "./../components/NavBar.css";
import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

function NavBar() {
  return (
    <nav className="nav-components">
      <Logo className="logo" />

      <form className="search">
        <input
          className="search-input"
          placeholder="Search a song"
          type="text"
        />
        <div className="search-icon-div">
        <IconButton className="search-icon">
          <SearchIcon />
        </IconButton>
        </div>
      </form>

      {/* Feedback Button */}
      <Button className="feedback-button" text="Give Feedback" onClick={null} />
    </nav>
  );
}

export default NavBar;
