import React from 'react';
// import logo from '../../assets/icons/logo.png';
import logo from '../../assets/logo.svg';
import { Typography } from '@mui/material';

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
