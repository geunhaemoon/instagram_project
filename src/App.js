import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import { SLayout } from './styles/Global/common';
import RootLayout from './components/Layouts/RootLayout/RootLayout';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <>
      <Reset />
      <Global styles={SLayout} />

      <RootLayout>

        <Routes>
          <Route path='' element={<div>test</div>} />
          <Route path='/accounts/emailsingnup' element={<Signup/>} />
          <Route path='/:username' element={<div>test2</div>} />
          <Route path='/explore' element={<div>test3</div>} />
        </Routes>
      </RootLayout>
      
    </>
  );
}

export default App;