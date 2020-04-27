import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

const ResetStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

      ${emotionReset}

      body {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
      }

      *,
      *::after,
      *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}
  />
);
ResetStyles.displayName = 'ResetStyles';

export default ResetStyles;
