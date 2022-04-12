import styles from './MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { get } from '../utils/httpClient';
import { Loader } from '../components/Loader';
import { getMovieImg } from '../utils/getMovieImg';
import { WatchButton } from '../components/WatchButton';
import { timeConvert } from '../utils/timeConvert';

export function MovieDetails (){
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
        setMovie(data);
        setIsLoading(false);
    });
}, [movieId]);

if (isLoading) {
    return <Loader/>;
}

const imageUrl = getMovieImg(movie.poster_path,500);
const releaseDate = movie.release_date === "" ? "" : movie.release_date.replaceAll("-","/");
const releaseYear = movie.status ==="Released" ? movie.release_date.slice(0,4) : movie.status;
const genres = movie.genres.map(genre => genre.name).join(', ')
const runtime = movie.runtime === 0 ? "" : timeConvert(movie.runtime);
const watchNowButton = movie.homepage === "" ? " Streaming not available" : <WatchButton movieHomepage={movie.homepage}/>
console.log(movie)

    return (

    <div className={styles.detailsContainer}>
    <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
    <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firtItem}><strong>{movie.title}</strong> ({releaseYear})</p>
        <div className={styles.movieFacts}>
            <span> {releaseDate}</span>
            <span> {`(US)`} </span>
            <span>• {`${genres}`} </span>
            <span>• {`${runtime}`} </span>
        </div>
        <p><strong>Overview</strong></p>
        <p>{movie.overview}</p>
        <p className={styles.altTextButton}>{watchNowButton}</p>
    </div>
    </div>);

}
