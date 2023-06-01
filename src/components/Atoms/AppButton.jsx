import { Button } from '@mui/material';

export default function AppButton({ children, sx, ...otherProps }) {

   const customBtnStyle = {
      fontSize: 18,
      textTransform: 'none',
      px: 3,
      ...sx,
   };

   return (
      <Button disableElevation sx={customBtnStyle} {...otherProps}>
         {children}
      </Button>
   );
}
