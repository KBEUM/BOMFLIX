import React from 'react';
import Slider from 'react-slick';
import Movie from '../movie/movie';
import styles from './movieList.module.css'
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

const MovieList = ({title, typeOfList, movieList, getVideo, movieKey, movieId}) => {

    const ArrowLeft = ({currentSlide, slideCount, ...props}) => (
        <button
            {...props}
            className={styles.prev}>{`<`}</button>
    );
    const ArrowRight = ({currentSlide, slideCount, ...props}) => (
        <button
            {...props}
            className={styles.next}>{`>`}</button>
    );

    const settings = {
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ] 
    };    

    const [currentMovie, setCurrentMovie] = useState([])

    const addClick = (movie)=> {
    setCurrentMovie(movie)     
    getVideo(movie);
    if(currentMovie.id === movieId) {
        setCurrentMovie([])}
    }

    return(
        <section className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.list}> 
                <Slider {...settings}>
                {typeOfList.map(movie => 
                <li key={movie.id}>
                  <Movie movie={movie} movieList={movieList} addClick={addClick}/>
                </li>)}
                </Slider>
            </ul>
            {(currentMovie.id === movieId) && 
            <iframe className={styles.video} id="player" type="text/html" title="movieList"
            src={`//www.youtube.com/embed/${movieKey}?enablejsapi=1&autoplay=1&mute=1`} 
            allow="autoplay" frameBorder="0" allowFullScreen="allowFullScreen"></iframe> }
        </section>        
    )};

export default MovieList;