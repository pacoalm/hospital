/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Signin from './components/Signin';
import { Header } from './components/Header';
import { HomePage } from './Pages/HomePage';
import { fontFamily, fontSize, gray2 } from './Styles/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DietarioConsultas } from './Pages/DietarioConsultas';
import background from './img/GRANADA.png';

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Signin />;
  }

  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
          background-image: url('./img/GRANADA.png');
        `}
      >
        <Header />

        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="DietarioConsultas" element={<DietarioConsultas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
