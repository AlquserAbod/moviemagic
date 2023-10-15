import { useMovieContext } from '../../Context/GlobelContext'
import './ResulteCard.css'
import actions from '../../Context/Actions.json';

import React, { useState } from 'react'

function ResulteCard({movie}) {
    const MovieContext = useMovieContext();

    const [inWatchlist, setInWatchlist] = useState(
        MovieContext.watchlist.find(
            (i) => i.imdbID === movie.imdbID
        )
    );
    const [inWatched, setInWatched] = useState(
        MovieContext.watched.find(
            (i) => i.imdbID === movie.imdbID
        )
    );

    const handleWatchlistAction = () => {
        
        MovieContext.MoviesDispatch({
            type : inWatchlist ? actions.REMOVE_MOVIE_FROM_WATCHLIST : actions.ADD_MOVIE_TO_WATCHLIST,
            payload: movie
        });
        setInWatchlist(!inWatchlist)
    }

    const handleWatchedAction = () => {
        MovieContext.MoviesDispatch({
            type : inWatched ? actions.REMOVE_MOVIE_FROM_WATCHED : actions.ADD_MOVIE_TO_WATCHED,
            payload: movie
        })
        
        setInWatched(!inWatched)
    }

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.Poster ? 
                        <img src={movie.Poster} alt={movie.Title} /> :
                        <div className="filter-poster"></div>
                }
            </div>

            <div className="info">
                <div className="result-card-header">
                    <h3 className="title">{movie.Title}</h3>
                    {
                        movie.Year ? 
                            <h4 className="release-date">{movie.Year}</h4> : "--"
                    }
                </div>

                <div className="controls">
                    <button className="btn" onClick={() => {handleWatchlistAction()}}>
                        {!inWatchlist ? "Add to watchlist": "Remove from watchlist"}
                    </button>

                    <button className="btn" onClick={() => {handleWatchedAction()}}>
                    {!inWatched ? "Add to watched": "Remove from watched"}
                    </button>
                </div>`
            </div>

        </div>
    )
}

export default ResulteCard