import React, { useState, useEffect } from 'react';
import './Movie.css';
import MovieCard from './MovieCard';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Movie Database</h1>
      <div>
        {movies.map(movie =><MovieCard key={movie.id} movie={movie}></MovieCard>)}
     
    </div>
    </div>
  );
};

export default Movie;
