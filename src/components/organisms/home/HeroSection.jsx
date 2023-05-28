import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import hero from '../../../assets/images/hero.png';

export default function HeroSection() {
   const theme = useTheme();
   const { primary, secondary } = theme.palette;

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
                  [theme.breakpoints.down('sm')]: {
                     textAlign: 'center',
                  },
               }}
            >
               <Typography variant="h2" >
                  <span style={{ color: primary.main }}>Take The Next Step</span>
                  <span style={{ color: secondary.main }}>Toward Your Success</span>
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
