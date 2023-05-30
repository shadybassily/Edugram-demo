import { Box } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { AppButton, AppInput } from '../Atoms';

export default function Searchbar({ sx }) {
   const containerStyle = {
      display: 'flex',
      width: { xs: '100%', md: '38%' },
      order: { xs: 3, md: 0 },

      border: '1px solid',
      borderColor: 'gray.light',
      borderRight: 0,
      borderRadius: '5px',

      ...sx,
   };

   const searchButtonStyle = {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
   };

   return (
      <Box sx={containerStyle}>
         <AppInput placeholder="What do you want to learn?" sx={{ pl: 3 }} />
         <AppButton variant="contained" sx={searchButtonStyle}>
            <SearchOutlinedIcon />
         </AppButton>
      </Box>
   );
}
3;
