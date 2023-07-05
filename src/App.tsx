import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Auth from './components/pages/Auth/AuthLogin/AuthLogin';
import Provider from './context/Provider';
import CartField from './components/Cart/CartField/CartField';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path="/home" element={
            <Provider>
              <Navbar />
              <Home />
              <CartField />
            </Provider>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
