import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Watched.css'
import { useMovieContext } from '../../Context/GlobelContext';
function Watched() {
  const MoviesContext = useMovieContext();

  return (
    <div className="watched-list">
      <div className="container">
        <div className="main-heading">
          <h1 >My Watched Movies</h1>
          <span className="movies-count">
            {MoviesContext.watched.length} Movies
          </span>
        </div>

        {MoviesContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MoviesContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No Movies in Watched list , <Link to="/add"> Add some Movie !!</Link>
          </h2>
        )}
      </div>
    </div>
  )
}

export default Watched