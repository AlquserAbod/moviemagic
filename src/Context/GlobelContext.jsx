import {  createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import data from '../data.json'

const initailState = {
    watchlist:  localStorage.getItem(data.localStorage.WatchListStorageKey) ?
        JSON.parse(localStorage.getItem(data.localStorage.WatchListStorageKey)) :
        [],
    watched:  localStorage.getItem(data.localStorage.WatchedListStorageKey) ?
        JSON.parse(localStorage.getItem(data.localStorage.WatchedListStorageKey)) :
        [],
}


const GlobelContext = createContext(initailState);

const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initailState);
    
    useEffect(() => {
        localStorage.setItem(
            data.localStorage.WatchedListStorageKey,
            JSON.stringify(state.watched)
        );

        localStorage.setItem(
            data.localStorage.WatchListStorageKey,
            JSON.stringify(state.watchlist)
        );

    }, [state])
    return (
        <GlobelContext.Provider 
            value= {{
                watchlist: state.watchlist, 
                watched: state.watched, 
                MoviesDispatch : dispatch,
            }}>
            {children}                      
        </GlobelContext.Provider>
    )
}
const useMovieContext = () => {
    return useContext(GlobelContext)
}

export default ContextProvider;
export { GlobelContext, useMovieContext };