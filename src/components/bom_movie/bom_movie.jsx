import React from 'react';
import { useState } from 'react';
import { koreaMovie, recomendMovie, recomend2ndMovie } from '../../service/movie_list_hardcoding';
import Header from '../header/header';
import MainPoster from '../main_poster/main_poster';
import MovieList from '../movie_list/movie_list';

const BomMovie = ({movieList}) => {
    
    const randomMovieArr = [...recomendMovie, ...recomend2ndMovie]
    const firstRandomMovie = randomMovieArr[Math.floor(Math.random() * randomMovieArr.length)];
    const [randomMovie, setRandomMovie] = useState(firstRandomMovie);
    const [movieKey, setMovieKey] = useState('');
    const [movieId, setMovieId] = useState('');

    const getVideo = (movie) => {
        setMovieId(movie.id)
        movieList.getVideoUrl(movie.id).then(data => {
          if (data == null){
          setMovieKey('')
          }
          else {
          setMovieKey(data.key)}
        })
      };

    const searchMovieInfo = (searchMovie) => {
      setRandomMovie(searchMovie)
    };

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
            <MovieList title="옳게 된 영화란 이런거지" typeOfList={recomend2ndMovie} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="미워도 다시 한번 한국영화" typeOfList={koreaMovie} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
        </div>
    )};

export default BomMovie;