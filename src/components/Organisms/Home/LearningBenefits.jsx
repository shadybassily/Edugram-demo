import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import benefitsImage from '../../../assets/images/benefits.png';
import Section from '../../Molecules/Section';

const benefits = [
   'Access 16,000+ expert-led courses.',
   'Expert instructors with lifetime access on your courses.',
   'Use project files and quizzes to practice while you learn.',
   'View courses anytime on your computer or phone.',
   'Earn a certificate when you complete a course.',
];

export default function LearningBenefits() {
   const theme = useTheme();
   const { primary, secondary } = theme.palette;
   const sectionContent = (
      <Grid
         container
         justifyContent={{ lg: 'space-around', md: 'space-around', xs: 'center' }}
         alignItems="center"
      >
         <Grid item xs={6} sm={6} md={4} lg={5}>
            <img src={benefitsImage} style={{ width: '95%' }} />
         </Grid>

         <Grid item sx={{ textAlign: 'start' }} lg={6} md={5}>
            <Grid container gap={5}>
               <Grid item lg={9} md={12}>
                  <Typography variant="h4">
                     <span style={{ color: secondary.main }}>Benefits Of Learning From </span>
                     <span style={{ color: primary.main }}>Edugram</span>
                  </Typography>
               </Grid>
               <Grid item>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                     {benefits.map((benefit, i) => (
                        <Typography
                           key={i}
                           sx={{
                              color: 'grey',
                              display: 'flex',
                              gap: 2,
                              alignItems: 'center',
                              fontSize: '18px',
                           }}
                        >
                           <CheckCircleOutlineRoundedIcon fontSize="medium" />
                           {benefit}
                        </Typography>
                     ))}
                  </Box>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );

   return <Section sectionContent={sectionContent} sx={{ backgroundColor: 'white' }} />;
}
