import { Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { AppButton } from '../Atoms';

const navListItems = [
   { title: <ShoppingCartOutlinedIcon /> },
   { title: 'Login' },
   { title: 'Sign Up', variant: 'contained' },
];
export default function NavMenu() {
   return (
      <Box sx={{ display: 'flex', gap: 1 }}>
         {navListItems.map((item) => (
            <AppButton key={item.title} variant={item.variant}>
               {item.title}
            </AppButton>
         ))}
      </Box>
   );
}
