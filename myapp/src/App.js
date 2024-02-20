import logo from './logo.svg';
import './App.css';

import React from 'react';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
 import { useState, useEffect } from 'react'
 import { NavLink } from 'react-router-dom'

import { RouterProvider, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom';
import Root from './components/root';
import HomePage from './components/home';
import Navbar from './components/navigation';
import Action from './components/actions';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route index element={ <HomePage/> }/>
  </Route>
));



function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [objects, setObjects] = useState([]);
  const actionUrl = [
    //'https://xivapi.com/Action/127',
    'https://xivapi.com/Action/128'
    
  ];

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        objects.push(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    for(let url of actionUrl) {
      fetchData(url)
    }
    
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      
        {objects.map(data=>( <div className='homeAction'>
        {/* Display your data here */}
       <Action data={data} key={data.Name}>
          
        
        </Action>
      </div> ))}
      
    </div>
  );
};

export default App;
