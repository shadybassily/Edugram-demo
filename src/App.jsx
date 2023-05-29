import { Provider } from 'react-redux';

import HomePage from './pages/HomePage';
import { store } from './services/store/store';
import { Navbar, Footer } from './components/organisms';

function App() {
   return (
      <Provider store={store}>
         <Navbar />
         <HomePage />
         <Footer />
      </Provider>
   );
}

export default App;
