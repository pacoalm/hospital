/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import { Page } from './Page';
import { PageTitle } from './PageTitle';

import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Page>
      <div>
        <PageTitle>Página Principal</PageTitle>
      </div>
    </Page>
  );
};
