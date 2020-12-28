import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './main_poster.module.css';

const MainPoster = ({movie, getVideo, movieKey, movieId}) => {

    useEffect(()=>{
        setCurrentMovie([])
    },[movie]);

    const [currentMovie, setCurrentMovie] = useState([]);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n) + "..." : str;
    };

    const onClick = () => {
    setCurrentMovie(movie)     
    getVideo(movie);
    if(currentMovie.id === movieId) {
        setCurrentMovie([])}
    };

    return(
        <section className={styles.container}
        style={{backgroundImage: `${movie ? `url(//image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})` : ""}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
                }}>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    {movie ? movie.title || movie.original_title : '검색결과없음'}</h1>
                <div className={styles.overview}>{movie && truncate(movie.overview, 300) }</div>
                {movie? <button className={styles.btn} onClick={onClick}>
                {(currentMovie.id === movieId) ? `⬛ TRAILER` : `▶ TRAILER`}
                </button> : ''}
            </div>
            {(currentMovie.id === movieId) ?  
            <iframe className={styles.video} id="player" type="text/html" title="mainPoster"
            src={`//www.youtube.com/embed/${movieKey}?enablejsapi=1&autoplay=1&mute=1`}
            allow="autoplay" frameBorder="0" allowFullScreen="allowFullScreen"></iframe> :
            <div className={styles.fade}></div>}
        </section>
    )};

export default MainPoster;