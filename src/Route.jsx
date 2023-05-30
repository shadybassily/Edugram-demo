import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/Home.Page';
import Layout from './components/Organisms/Layout';

const AppRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
         </Route>
      </Routes>
   );
};

export default AppRoute;
