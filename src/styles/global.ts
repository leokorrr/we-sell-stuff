import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
   }

   #root{
    margin: 0 auto;
   }

   .grey {
      color: #6d6d6d;
   }
`
