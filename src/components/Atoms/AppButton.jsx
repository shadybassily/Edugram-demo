import { Button } from '@mui/material';

export default function AppButton({ children, sx, ...otherProps }) {

   const btnStyle = {
      fontSize: 18,
      textTransform: 'none',
      px: 3,
      ...sx,
   };

   return (
      <Button disableElevation sx={btnStyle} {...otherProps}>
         {children}
      </Button>
   );
}
