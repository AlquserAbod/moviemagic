import { useEffect, useState } from 'react'
import './Add.css'
import data from  '../../data.json';

import axios from 'axios';
import ResulteCard from '../../components/ResulteCard/ResulteCard';

function Add() {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = (e) => setSearchValue(e.target.value);

    useEffect(() => {
        const movie = searchValue.trim().toLowerCase();
        const url = `${data.api.url}/?s=${movie}&apikey=${data.api.apikey}`;

        axios.get(url)
            .then((res) => {
                if(res.data.Search) {
                    setMovies(res.data.Search)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },[searchValue])

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-container">
                        <input type="text" 
                        placeholder="Search for a Movie" 
                        value={searchValue} 
                        onChange={handleSearch} />
                    </div>
                </div>

                { movies.length > 0 ?                     
                    <ul className="results">
                        {movies.map((movie) => (
                            <li key={movie.imdbID}>
                                {<ResulteCard movie={movie} /> }
                            </li>
                        ))}
                    </ul> : <></>
                }
            </div>
        </div>
    )


}

export default Add 