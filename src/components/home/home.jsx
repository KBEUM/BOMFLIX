import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../header/header';
import MainPoster from '../mainPoster/mainPoster';
import MovieList from '../movie_list/movieList';
import styles from './home.module.css'

const Home = ({movieList}) => {
    const [upcoming, setUpcoming] = useState([])
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [randomMovie, setRandomMovie] = useState()
    const [movieKey, setMovieKey] = useState('')
    const [movieId, setMovieId] = useState('')

    useEffect(()=>{
      movieList.getMovies('popular')
      .then(results => setPopular(results));
      movieList.getMovies('top_rated')
      .then(results => setUpcoming(results));
      movieList.getMovies('upcoming')
      .then(results => {
          setTopRated(results)
          setRandomMovie(results[Math.floor(Math.random() * results.length)])});
    },[movieList])

    const getVideo = (movie) => {
      setMovieId(movie.id)
      movieList.getVideoUrl(movie.id).then(data => {
        if (data == null){
        setMovieKey('')
        }
        else {
        setMovieKey(data.key)}
      })
    }

    const searchMovieInfo = (searchMovie) => {
      setRandomMovie(searchMovie)
    }

    return (
        <div className={styles.main}>
            <Header movieList={movieList} getVidoe={getVideo} movieKey={movieKey}
                    searchMovieInfo={searchMovieInfo}/>
            <MainPoster movieList={movieList} movie={randomMovie} 
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="개봉예정" typeOfList={upcoming} movieList={movieList} 
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="인기상영" typeOfList={popular} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId}
                        />
            <MovieList title="top rated" typeOfList={topRated} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />            
        </div>
    )};
    
export default Home;