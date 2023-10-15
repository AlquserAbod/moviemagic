import MovieControls from '../MovieControls/MovieControls'
import './MovieCard.css'

import React from 'react'

function MovieCard({ movie, type}) {
  return (
    <div className="movie-card">
        <div className="overlay"></div>
        {movie.Poster ? (
            <img src={movie.Poster} alt={movie.Title} />
        ) : (
            <div className="filter-poster"></div>
        )}

        <MovieControls movie={movie} type={type} />
    </div>
  )
}

export default MovieCard