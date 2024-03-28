import React from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import Offers from './components/Offers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/products" />
        </Routes>
      </BrowserRouter>
      <Head />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
