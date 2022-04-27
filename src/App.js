import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/details/:id" component={ Details } />
      <Route exact path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
