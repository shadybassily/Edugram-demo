import { Box } from '@mui/material';

// a container to determine the borders of content within a section
export default function WrappingContainer({ children, sx }) {
   return (
      <Box
         sx={{
            width: '90%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            ...sx,
         }}
      >
         {children}
      </Box>
   );
}
