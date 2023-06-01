import { Box, Grid, Typography } from '@mui/material';

import hero from 'src/assets/images/hero.png';

export default function HomeHeader() {

   return (
      <Grid container direction="row-reverse" justifyContent="space-between" sx={{ pb: 5 }}>
         <Grid item sm={6} md={4} xl={4} sx={{ display: 'flex' }} justifyContent="end">
            <img src={hero} style={{ width: '100%' }} />
         </Grid>

         <Grid
            item
            xs={12}
            sm={6}
            md={7}
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Box
               sx={{
                  width: '85%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '35px',
                  textAlign: { xs: 'center', sm: 'start' },
               }}
            >
               <Typography variant="h2">
                  <Box component="span" color="primary.main">
                     Take The Next Step
                  </Box>
                  <Box component="span" color="secondary.main" ml={1}>
                     Toward Your Success
                  </Box>
               </Typography>

               <Typography variant="body1" color="grey">
                  Join hundreds of learners from the middle-east alreadylearning on E-learning
                  Platform ! We qualify you to be a highly competent programmer through a myriad of
                  software development courses covering a variety of programming languages.
               </Typography>
            </Box>
         </Grid>
      </Grid>
   );
}
