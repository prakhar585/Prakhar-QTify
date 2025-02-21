import React from 'react'
import logoImg from './../assets/logoImg.png';


function Logo({ className }) {
  return (
    <img src={logoImg} alt='logo' className={className} />
  );
}


export default Logo
