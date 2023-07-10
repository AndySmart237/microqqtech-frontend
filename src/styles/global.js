// Style CSS global pour toutes les pages du site

import { css } from '@linaria/core';

export const globals = css`
  :global() {    
    body {
      margin: 0px;
      padding: 0px;
      color: #000000;    
      background-color: #efefef;
    }
    .theme-sombre {
      color: #efefef;
      background-color: #0D1623;
    }
  
    .theme-clair {
      color: #000000;
      background-color: #efefef;
    }
  }
`;