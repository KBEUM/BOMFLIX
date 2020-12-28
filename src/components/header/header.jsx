import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css'

const Header = ({movieList, searchMovieInfo}) => {

    const inputRef = useRef();
    const history = useHistory();
    const [backgroundStyle, setBackgroundStyle] = useState(false)   ; 

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 20) {
                setBackgroundStyle(true)}
            else {
                setBackgroundStyle(false)
        }});
    }, []);

    const onSubmit = (event)=> {
        event.preventDefault();
        const query = inputRef.current.value;
        movieList.searchMovie(query).then(movie => {searchMovieInfo(movie)});
        inputRef.current.value = "";
    };

    const bomClick = () => {
        history.push("/bom")
    };

    const homeClick = () => {
        history.push("/")
    };

    return (
        <header className={!backgroundStyle ? `${styles.header}` : `${styles.header} ${styles.scroll}`}>
            <div className={styles.front}>
                <h1 className={styles.logo} onClick={homeClick}>BOMFLIX</h1>
                <p className={styles.home} onClick={homeClick}>홈</p>
                <p className={styles.list} onClick={bomClick}>BoM의 영화들</p>
            </div>
            <div className={styles.behind}>
                <form onSubmit={onSubmit}>
                    <input  className={styles.search} size="15" ref={inputRef} type="search" placeholder="제목"/>
                    <button className={styles.btn}><i className={`fas fa-search`} /></button>
                </form>
                <div>
                <img className={styles.profile} src="./image/profile.jpg" alt="profile"/>
                </div>
            </div>
        </header>
    )
};

export default Header;