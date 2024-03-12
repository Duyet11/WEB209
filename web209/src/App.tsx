import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Productlist from './components/Products';
import Footer from './components/Footer';
import IProduct from './interface/product';
import Tempaltedemo from './components/Demo';
import { Route, Routes } from 'react-router-dom';
import Client from './layout/client';
import Dashboard from './layout/dashboard';
import Home from './layout/home';

function App() {
  
  return (
    <Routes>
      <Route path='/' Component={Client}>
        <Route path='' Component={Home}/>  
      </Route>
      <Route path='/dashboard' Component={Dashboard}/>
    </Routes>
  );
}

export default App;