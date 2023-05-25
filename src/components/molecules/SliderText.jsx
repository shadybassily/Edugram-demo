// prepare slider items
// slider items can be either text, or media card
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SliderText({ item, selected, setSelected, onClick }) {
   const handleSelection = (item) => {
      setSelected(item);
      onClick();
   };

   const theme = useTheme();
   const { primary } = theme.palette;

   const itemStyle = (item) => {
      const style = {
         minWidth: 'fit-content',
         width: '50%',
         margin: '0 auto',
         p: 2,
         borderRadius: '8px',
         cursor: 'pointer',
         textAlign: 'center',
      };
      if (item === selected) {
         style.backgroundColor = 'white';
         style.color = primary.main;
      }
      return style;
   };

   return (
      <Box>
         <Typography
            variant="h6"
            sx={itemStyle(item)}
            onClick={() => {
               handleSelection(item);
            }}
         >
            {item}
         </Typography>
      </Box>
   );
}
