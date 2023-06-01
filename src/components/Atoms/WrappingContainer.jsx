import { Box } from '@mui/material';

// a container to determine the borders of content within a section
export default function WrappingContainer({ children, sx }) {
   return (
      <Box
         sx={{
            width: '90%',
            margin: '0 auto',
            
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center' },

            ...sx,
         }}
      >
         {children}
      </Box>
   );
}
