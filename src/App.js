import React from 'react';
import './App.css';
import Herosection from './components/Herosection';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Atheletepage from './pages/Atheletepage';
import Connect from './pages/Connect';
import News from './pages/News';
import Event from './pages/Event';
import Shop from './pages/Shop';


function App() {
  return (
    <div >
      <Herosection />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/athelete' element={<Atheletepage />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/news' element={<News />} />
        <Route path='/event' element={<Event />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
