import { Box } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTheme } from '@mui/material/styles';

import { AppButton, AppInput } from '../atoms';

export default function Searchbar({ sx }) {
   const theme = useTheme();

   const containerStyle = {
      display: 'flex',
      [theme.breakpoints.down('lg')]: {
         width: '38%',
      },
      [theme.breakpoints.down('md')]: {
         order: 3, // flex-wrap >> results in adding search bar in a new line
         width: '100%',
      },
      border: `1px solid ${theme.palette.gray.light}`,
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
