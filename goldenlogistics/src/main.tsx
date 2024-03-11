import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { createBrowserRouter, RouterProvider} from "react-router-dom"

import Root from "./src/routes/root"
import theme from './theme';
import App from './App';

const router = createBrowserRouter ([
  { 
    path: "/",
    element: <Root/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
          <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
