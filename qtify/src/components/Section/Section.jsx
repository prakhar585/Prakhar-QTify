import React from 'react'
import './Section.css';
import { Box  } from '@mui/material'
import Grid from '@mui/material/Grid2';
import MusicCard from '../Card/MusicCard';

const Section = ({ topAlbums }) => {

    console.log("top album from Section", topAlbums)

  return (
    <div className='section-container'>
      <Box className="section-header">
        <h5>Top Albums</h5>
        <button>Collapse</button>
      </Box>
      <Grid container spacing={1} columns={14}>
        {topAlbums.length>0?(
        topAlbums.map((album)=>(
        <Grid item key={album.id} lg={2}>
            <MusicCard album={album}/>
        </Grid>
       ))):(
        <h1>Loading....</h1>
       )}
      
      </Grid>
    </div>
  )
}

export default Section
