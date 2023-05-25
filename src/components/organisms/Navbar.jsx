import { AppBar, Box } from '@mui/material';

import { AppLogo } from '../atoms';
import { Searchbar, NavMenu } from '../molecules';
import { useTheme } from '@mui/material/styles';
import WrappingContainer from '../template/WrappingContainer';

export default function Navbar() {
   const theme = useTheme();

   const AppBarStyle = {
      backgroundColor: '#fff',
      boxShadow: 'none',
      py: 3,
      position: 'relative',
   };

   const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 2,
      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column',
         alignItems: 'center',
      },
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
