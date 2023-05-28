import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import theme from './theme';
const client = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false, // default: true
       },
   },
});
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <QueryClientProvider client={client}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
         </ThemeProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
