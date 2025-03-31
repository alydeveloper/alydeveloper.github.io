import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Webpage from './components/Webpage';

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/portfolio' element={<Webpage />} />
      </Routes>
    </>
  );
}

export default PageList;
