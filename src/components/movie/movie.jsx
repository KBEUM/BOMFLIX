import React from 'react';
import styles from './movie.module.css'

const Movie = ({movie, addClick}) => {

    const onClick = () => {
        addClick(movie)
    }

    return (
        <div className={styles.movieinfo} onClick={onClick}>
            <img className={styles.img} 
            src={`//image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
        </div>
    )};

export default Movie;