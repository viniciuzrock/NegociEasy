import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Login from './components/Form/Login/Login'
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Navbar><Home /> </Navbar>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
