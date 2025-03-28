import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testing from './components/Testing';

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </>
  );
}

export default PageList;
