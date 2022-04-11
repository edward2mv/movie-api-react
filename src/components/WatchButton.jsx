import styles from "./WatchButton.module.css"
export function WatchButton(props){
    return (
        <div className={styles.wrapper}>
            <div className={styles.outer}>
                <button className={styles.watchButton} onClick={()=>window.open(props.movieHomepage, '_blank')}>Watch Now</button>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}