/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import { Page } from './Page';
import { PageTitle } from './PageTitle';

import { useNavigate } from 'react-router-dom';
import background from '../img/GRANADA.png';
import { fontFamily, fontSize, gray2 } from '../Styles/styles';

export const HomePage = () => {
  return (
    <Page>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <h1>Pagina Principal</h1>
      </div>
    </Page>
  );
};
