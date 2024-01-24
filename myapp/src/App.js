import logo from './logo.svg';
import './App.css';
import React from 'react';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
 import { useState } from 'react'
 import { NavLink } from 'react-router-dom'

import { RouterProvider, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom';
import Root from './components/root';
import HomePage from './components/home';
import Navbar from './components/navigation';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route index element={ <HomePage/> }/>
  </Route>
));



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          XIVapi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
