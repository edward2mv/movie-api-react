import {useEffect, React,useState} from 'react'

import { useQuery } from '../hooks/useQuery.jsx';
import { get } from '../utils/httpClient.js';
import { Loader } from './Loader.jsx';
import MovieCard from './MovieCard.jsx'
import styles from './MovieGrid.module.css';


function MovieGrid() {
const [movies,setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const query = useQuery()
const search = query.get("search");


    useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
    ? "/search/movie?query="+ search
    : "/discover/movie";
    get(searchUrl).then(data =>{
            setMovies(data.results);
        setIsLoading(false);
        })
    },[search]);

    if (isLoading){
        return <Loader/>
    }
return (
    <div>
    <ul className={styles.movieGrid}>
        {movies.map((movie)=>
        <MovieCard key={movie.id} movie={movie}/>
        )}
    </ul>
    </div>
)
}

export default MovieGrid