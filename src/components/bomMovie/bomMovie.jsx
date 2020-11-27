import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { koreaMovie, recomendMovie } from '../../service/movieListHardCoding';
import Header from '../header/header';
import MainPoster from '../mainPoster/mainPoster';
import MovieList from '../movie_list/movieList';

const BomMovie = ({movieList}) => {
    
    const [randomMovie, setRandomMovie] = useState([])
    const [movieKey, setMovieKey] = useState('')
    const [movieId, setMovieId] = useState('')

    useEffect(()=>{
    setRandomMovie(recomendMovie[Math.floor(Math.random() * recomendMovie.length)])
    },[])

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


    return(
        <div>
            <Header movieList={movieList} getVidoe={getVideo} movieKey={movieKey}
                    searchMovieInfo={searchMovieInfo}/>
            <MainPoster movieList={movieList} movie={randomMovie} 
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="보고 보고 또 보고 생각나면 다시 보는 영화" typeOfList={recomendMovie} movieList={movieList} 
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="미워도 다시 한번 한국영화" typeOfList={koreaMovie} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
        </div>
    )};

export default BomMovie;