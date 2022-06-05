/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Page } from './Page';
import { Header } from '../components/Header';
import SeleccionDietarioCex from '../components/SeleccionDietarioCEX';
export const DietarioConsultas = () => {
  return (
    <Page>
      <div>
        <h1>Dietario de Consultas</h1>
        <SeleccionDietarioCex />
      </div>
    </Page>
  );
};
