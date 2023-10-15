import { Link } from 'react-router-dom';
import  {useMovieContext} from '../../Context/GlobelContext'
import MovieCard from '../../components/MovieCard/MovieCard';
import './Watchlist.css';

function Watchlist() {
  const MoviesContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1 >My Watchlist</h1>
          <span className="movies-count">
            {MoviesContext.watchlist.length} Movies
          </span>
        </div>

        {MoviesContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MoviesContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No Movies in your list, <Link to="/add"> Add some Movie !!</Link>
          </h2>
        )}
      </div>
    </div>
  )
}

export default Watchlist