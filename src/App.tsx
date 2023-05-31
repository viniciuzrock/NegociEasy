import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';

import Login from './components/Form/Login/Login'
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
