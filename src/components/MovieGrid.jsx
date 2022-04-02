import {useEffect, React,useState} from 'react'
import { get } from '../utils/httpClient.js';
import MovieCard from './MovieCard.jsx'
import styles from './MovieGrid.module.css';


function MovieGrid() {
const [movies,setMovies] = useState([]);

    useEffect(() =>{
    get("/discover/movie").then(data =>{
            setMovies(data.results);
            console.log(movies);
        })
    },[]);
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