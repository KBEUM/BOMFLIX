import React from 'react';
import Home from './components/home/home';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BomMovie from './components/bom_movie/bom_movie';

function App({movieList}) {
  return (
    <div>
      <HashRouter basename="/bomflix">
        <Switch>
          <Route exact path="/">
            <Home movieList={movieList} />
          </Route>
          <Route path="/mymovie">
            <BomMovie movieList={movieList}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )};

export default App;
