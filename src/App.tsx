/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Signin from './components/Signin';
import { HomePage } from './Pages/HomePage';
import { fontFamily, fontSize, gray2 } from './Styles/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DietarioConsultas } from './Pages/DietarioConsultas';
import { Header } from './components/Header';

import './Styles/styles.css';

function App() {
  const [token, gettoken] = useState(localStorage.getItem('accessToken'));

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
        if (token) {<Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="DietarioConsultas" element={<DietarioConsultas />} />
          <Route path="Sign" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
