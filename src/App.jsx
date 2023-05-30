import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import theme from './theme';
import { store } from './services/store/store';
import AppRoute from './Route';

function App() {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRoute />
         </ThemeProvider>
      </Provider>
   );
}

export default App;
