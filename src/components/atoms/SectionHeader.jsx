import { Grid, Typography } from '@mui/material';

export default function SectionHeader({ children, title, subTitle, sx }) {
   return (
      <Grid
         container
         gap={2}
         sx={{
            textAlign: 'center',
            backgroundColor: 'transparent',
            py: 3,
            position: 'relative',
            ...sx,
         }}
         justifyContent="center"
         alignContent="center"
      >
         {title && (
            <Grid item xs={12}>
               <Typography color="secondary" variant="h2">
                  {title}
               </Typography>
            </Grid>
         )}
         {children}
         {subTitle && (
            <Grid item xs={7} sm={4} md={4} lg={3} xl={2}>
               <Typography variant="body1" color="grey">
                  {subTitle}
               </Typography>
            </Grid>
         )}
      </Grid>
   );
}
