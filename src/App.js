import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import { SLayout } from './styles/Global/common';
import Sidebar from './components/Sidebar/Sidebar';
import RootLayout from './components/Layouts/RootLayout/RootLayout';

function App() {
  return (
    <>
      <Reset />
      <Global styles={SLayout} />


      <RootLayout>
        <Sidebar />
        <Routes>
          <Route path='' element={<div>test</div>} />
          <Route path='/:username' element={<div>test2</div>} />
          <Route path='/explore' element={<div>test3</div>} />
        </Routes>
      </RootLayout>
      
    </>
  );
}

export default App;