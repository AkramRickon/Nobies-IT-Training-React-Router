import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import About from './About/About';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Trainers from './Trainers/Trainers';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/courses'>
          <Courses></Courses>
        </Route>
        <Route exact path='/trainers'>
          <Trainers></Trainers>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;
