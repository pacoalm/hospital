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

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Signin />;
  }

  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
