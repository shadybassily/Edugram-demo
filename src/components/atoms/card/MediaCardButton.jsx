import { Button } from '@mui/material';

export default function MediaCardButton({ children, sx, ...otherProps }) {
   const styles = {
      textTransform: 'none',
      border: '2px solid',
      borderRadius: '8px',
      '&:hover': {
         border: '2px solid',
      },
      ...sx,
   };
   return (
      <Button sx={styles} {...otherProps} variant="outlined">
         {children}
      </Button>
   );
}
