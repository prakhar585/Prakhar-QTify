import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import MusicCard from './components/Card/MusicCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <MusicCard/>
    </div>
  );
}

export default App;
