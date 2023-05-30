import { Box, Typography } from '@mui/material';

export default function AppBadge({ src, alt, ariaLabel, sx, ...otherProps }) {
   const badgeStyle = {
      backgroundColor: '#F3F3F3',
      width: 150,
      height: 150,
      borderRadius: '50%',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...sx,
   };

   return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
         <Box sx={badgeStyle} {...otherProps}>
            <img src={src} alt={alt} aria-label={ariaLabel} />
         </Box>
         <Typography variant="h5" color="gray.dark">
            {alt}
         </Typography>
      </Box>
   );
}
