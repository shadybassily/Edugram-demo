import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Price({ newPrice, oldPrice }) {
   return (
      <Box>
         <Typography variant="body1" component="span" sx={{ marginRight: '10px' }}>
            $ {newPrice}
         </Typography>
         <Typography
            variant="body1"
            component="span"
            color="text.secondary"
            sx={{ textDecoration: 'line-through' }}
         >
            {oldPrice && `$ ${oldPrice}`}
         </Typography>
      </Box>
   );
}
