import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <div>      
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>          
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/post/:postId">
          <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
