import { current } from '@reduxjs/toolkit'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import NotAvailable from '../components/NotAvailable'
import SelectGenre from '../components/SelectGenre'
import Slider from '../components/Slider'
import { fetchMovies, getGenres } from '../store'
import { firebaseAuth } from '../utils/firebase-config'

export default function TVShows() { 
  const [isScrolled,setIsScrolled] = useState(false)
 
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const genres  = useSelector((state)=> state.netflix.genres) 
  const movies = useSelector((state)=>state.netflix.movies)
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  },[genresLoaded]);

  useEffect(()=>{
    dispatch(getGenres()); 
  },[])
 

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true) 
    return () =>(window.onscroll = null);
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{

  })

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? (
          <>
            <Slider movies={movies} />
          </>
        ) : (
          <h1 className="not-available">
            No TV Shows avaialble for the selected genre. Please select a
            different genre.
          </h1>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data{
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`


