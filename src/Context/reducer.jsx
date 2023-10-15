import actions from './Actions.json'

export const reducer = (state, action) => {
     switch (action.type) {
         case actions.ADD_MOVIE_TO_WATCHLIST:
            state.watchlist.push(action.payload)
            return state
        
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload.imdbID)
            }

        case actions.ADD_MOVIE_TO_WATCHED:
            state.watched.push(action.payload)
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload.imdbID),
            }
        
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID)
            }

        case actions.MOVE_TO_WATCHLIST:
            state.watchlist.push(action.payload)
            
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID),
            }
        

        default:
            return state;
    }
    
}