import React from 'react'
import MovieCard from './MovieCard.jsx'
import movies from './movies.json'
import styles from './MovieGrid.module.css'

function MovieGrid() {
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