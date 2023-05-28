import { Provider } from 'react-redux';

import HomePage from './components/pages/HomePage';
import { store } from './store/store';
import { Navbar, Footer } from './components/organisms';

function App() {
   return (
      <Provider store={store}>
        <Navbar/>
        <HomePage />
        <Footer />
      </Provider>
   );
}

export default App;
