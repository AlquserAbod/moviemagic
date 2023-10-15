import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { useMovieContext } from '../../Context/GlobelContext'
import actions from '../../Context/Actions.json'

function MovieControls ({movie, type }) {
    const MovieContext = useMovieContext();

    const handleControlClick = (action) => {
        MovieContext.MoviesDispatch({
            type:action,
            payload: movie
        })
    }
    
  return (
    <div className='controls'>
        {
            type === "watchlist" && (
                <>
                    <button className='control-btn'
                            onClick={() => {handleControlClick(actions.ADD_MOVIE_TO_WATCHED)}}>
                        <FaEye />
                    </button>

                    <button className='control-btn' 
                            onClick={() => {handleControlClick(actions.REMOVE_MOVIE_FROM_WATCHLIST)}}>
                        <FaTimes />
                    </button>
                </>
            )
        }
        {
            type === "watched" && (
                <>
                    <button className='control-btn'
                            onClick={() => {handleControlClick(actions.MOVE_TO_WATCHLIST)}}>
                        <FaEyeSlash />
                    </button>

                    <button className='control-btn'
                            onClick={() => {handleControlClick(actions.REMOVE_MOVIE_FROM_WATCHED)}}>
                        <FaTimes />
                    </button>
                </>
            )
        }
    </div>
  )
}

export default MovieControls