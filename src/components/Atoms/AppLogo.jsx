import { Typography } from '@mui/material';

import logo from 'src/assets/logo.svg';

export default function AppLogo({ sx }) {
   const logoContainerstyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontsize: '50px',
      ...sx,
   };

   return (
      <div style={logoContainerstyle}>
         <img src={logo} />
         <Typography color="primary" variant="h1" fontSize="30px">
            Edugram
         </Typography>

      </div>
   );
}
