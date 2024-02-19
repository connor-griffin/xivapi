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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://xivapi.com');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Display your data here */}
          <p>{data && data.someProperty}</p>
        </div>
      )}
    </div>
  );
};

export default App;
