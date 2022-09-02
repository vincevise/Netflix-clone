import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Player from './components/Player'
import TVShows from './components/TVShows'
import Login from './pages/Login'
import MoviePage from './pages/MoviePage'
import Movies from './pages/MoviePage'
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'
import UserListedMovies from './pages/UserLiked'
import UserLiked from './pages/UserLiked'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
