import { Outlet } from 'react-router-dom';
import Navbar from 'components/Organisms/Navbar';
import Footer from 'components/Organisms/Footer';

export default function Layout() {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
}
