import React from "react";
import styles from "./Hero.module.css";
import { colors } from "@mui/material";

function Hero() {
  return (
    <div className={styles.hero}>
      <img
        className={styles.heroImg}
        src={require("./../assets/HeroImg.png")}
        width={212}
        alt="headphones"
      />
    </div>
  );
}

export default Hero;
