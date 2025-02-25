import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import axios from "axios";
import './App.css';
import Section from "./components/Section/Section";

function App() {
const [topAlbums, setTopAlbums] = useState([]);
const [newAlbums, setNewAlbums] = useState([]);
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
  
  
  const fetchNewAlbums = async () =>{
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
      setNewAlbums(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchTopAlbums();
  fetchNewAlbums();

},[]);


  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Section albumData={topAlbums} title="Top Albums"/>
      <Section albumData={newAlbums} title="New Albums"/>
    </div>
  );
}

export default App;
