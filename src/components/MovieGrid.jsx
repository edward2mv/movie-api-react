import {useEffect, React,useState} from 'react'
import { get } from '../utils/httpClient.js';
import { Loader } from './Loader.jsx';
import MovieCard from './MovieCard.jsx'
import styles from './MovieGrid.module.css';


function MovieGrid() {
const [movies,setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
    setIsLoading(true);
    get("/discover/movie").then(data =>{
            setMovies(data.results);
        setIsLoading(false);
        })
    },[]);

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