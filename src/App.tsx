import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Auth from './components/pages/Auth/Auth';
import Provider from './context/Provider';
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
            </Provider>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
