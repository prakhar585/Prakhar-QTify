import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import MusicCard from './components/Card/MusicCard';
import axios from "axios";
import Section from "./components/Section/Section";

function App() {
const [topAlbums, setTopAlbums] = useState([]);
//fetch top albums using a promise
useEffect(()=>{
  const fetchTopAlbums= async () =>{
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
      setTopAlbums(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchTopAlbums();
},[]);


  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Section topAlbums={topAlbums}/>
    </div>
  );
}

export default App;
