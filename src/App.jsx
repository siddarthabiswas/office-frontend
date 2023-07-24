import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Logout from './Components/Logout/Logout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>

          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;