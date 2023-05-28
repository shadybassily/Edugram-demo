import { AppBar } from '@mui/material';

import { AppLogo } from '../atoms';
import { Searchbar, NavMenu, WrappingContainer } from '../molecules';

export default function Navbar() {

   const AppBarStyle = {
      backgroundColor: '#fff',
      boxShadow: 'none',
      py: 3,
      position: 'relative',
   };

   const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 2,
      flexDirection:{xs:'column', sm:'row'},
      alignItems:{xs:'center'},
   };

   return (
      <AppBar sx={AppBarStyle}>
         <WrappingContainer sx={containerStyle}>
               <AppLogo sx={{ flexGrow: 1 }} />
               <Searchbar sx={{ flexGrow: 2 }} />
               <NavMenu sx={{ flexGrow: 1 }} />
         </WrappingContainer>
      </AppBar>
   );
}
