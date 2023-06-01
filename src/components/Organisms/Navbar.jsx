import { AppBar } from '@mui/material';

import { AppLogo, WrappingContainer } from 'components/Atoms';
import { Searchbar, NavMenu } from 'components/Molecules';

export default function Navbar() {
   const AppBarStyle = {
      backgroundColor: '#fff',
      boxShadow: 'none',
      py: 3,
      position: 'relative',
   };

   return (
      <AppBar sx={AppBarStyle}>
         <WrappingContainer >
            <AppLogo sx={{ flexGrow: 1 }} />
            <Searchbar sx={{ flexGrow: 2 }} />
            <NavMenu sx={{ flexGrow: 1 }} />
         </WrappingContainer>
      </AppBar>
   );
}
