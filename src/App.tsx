import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from 'react-router-dom';
import SignIn from './Components/SignIn'
import SignInPage from './Components/HomePage';
import Register from './Components/Register';
import HomePage from './Components/HomePage';

function App() {
  return (
    <HomePage/>
  );
}

export default App;