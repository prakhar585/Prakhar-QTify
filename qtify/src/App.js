import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import axios from "axios";
import './App.css';
import Section from "./components/Section/Section";

function App() {
const [topAlbums, setTopAlbums] = useState([]);
const [newAlbums, setNewAlbums] = useState([]);
const [songs,setSongs] = useState([]);
const [filteredSongs, setFilteredSongs] = useState([]);
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

  const fetchSongs = async () =>{
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
      setSongs(response.data);
      setFilteredSongs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchTopAlbums();
  fetchNewAlbums();
  fetchSongs();
},[]);


const handleFilterSongs=(value)=>{

  if(value === 'all'){
    setFilteredSongs(songs);
  }else{
    let filteredSongs = songs.filter((song)=>(song.genre.key === value));
    setFilteredSongs(filteredSongs);
  }
}


  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Section albumData={topAlbums} title="Top Albums" showButton={true} showTab={false}/>
      <Section albumData={newAlbums} title="New Albums" showButton={true}  showTab={false}/>
      <hr style={{borderColor:"#34C94B"}}/>
      <Section albumData={filteredSongs} title="Songs" showButton={false} showTab={true} filterSongs={(value)=>handleFilterSongs(value)}/>
    </div>
  );
}

export default App;
