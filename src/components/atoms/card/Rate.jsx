import { Box, Typography, Rating } from '@mui/material';

export default function Rate({ rating, numOfRatings }) {
   return (
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
         <Typography component="span" sx={{ fontSize: '14px', color: '#F7B52E' }}>
            {rating}
         </Typography>
         <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
            size="small"
         />
         <Typography component="span" sx={{ fontSize: '14px', color: '#938F8C' }}>
            ({numOfRatings})
         </Typography>
      </Box>
   );
}
