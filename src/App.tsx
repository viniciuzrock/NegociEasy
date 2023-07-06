import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import AuthLogin from './components/pages/Auth/AuthLogin/AuthLogin';
import AuthRegister from './components/pages/Auth/AuthRegister/AuthRegister';
import Provider from './context/Provider';
import CartField from './components/Cart/CartField/CartField';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AuthLogin />} />
          <Route path='/register' element={<AuthRegister />} />
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
