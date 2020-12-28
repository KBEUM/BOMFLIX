import React from 'react';
import Home from './components/home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BomMovie from './components/bom_movie/bom_movie';

function App({movieList}) {
  return (
    <div>
      <BrowserRouter basename="/bomflix">
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
