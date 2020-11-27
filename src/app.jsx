import React from 'react';
import Home from './components/home/home';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BomMovie from './components/bomMovie/bomMovie';

function App({movieList}) {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home movieList={movieList} />
          </Route>
          <Route exact path="/bom">
            <BomMovie movieList={movieList}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )};

export default App;
