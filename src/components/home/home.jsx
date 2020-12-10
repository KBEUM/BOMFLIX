import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../header/header';
import MainPoster from '../mainPoster/mainPoster';
import MovieList from '../movie_list/movieList';

const Home = ({movieList}) => {
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [randomMovie, setRandomMovie] = useState();
    const [movieKey, setMovieKey] = useState('');
    const [movieId, setMovieId] = useState('');

    useEffect(()=>{
      movieList.getMovies('top_rated')
      .then(results => setTopRated(results));
      movieList.getMovies('popular')
      .then(results => setPopular(results));
      movieList.getMovies('upcoming')
      .then(results => {
          setUpcoming(results)
          setRandomMovie(results[Math.floor(Math.random() * results.length)])});
    },[movieList]);

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

    return (
        <div>
            <Header movieList={movieList} getVidoe={getVideo} movieKey={movieKey}
                    searchMovieInfo={searchMovieInfo}/>
            <MainPoster movieList={movieList} movie={randomMovie} 
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="Top Rated Movies" typeOfList={topRated} movieList={movieList} 
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />
            <MovieList title="Popular Movies" typeOfList={popular} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId}
                        />
            <MovieList title="Upcoming Movies" typeOfList={upcoming} movieList={movieList}
                        getVideo={getVideo} movieKey={movieKey} movieId={movieId} 
                        />            
        </div>
    )};
    
export default Home;