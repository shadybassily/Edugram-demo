import { Grid } from '@mui/material';

import { AppBadge } from '../../Atoms';
import { learningProcess } from '../../../data';
import Section from '../../Molecules/Section';

export default function LearningProcess() {
   const sectionContent = (
      <Grid
         container
         justifyContent="space-evenly"
         gap={2}
         sx={{ py: 4, backgroundColor: '#ffffff' }}
      >
         {learningProcess.map(({ src, alt, ariaLabel }) => (
            <Grid item key={alt}>
               <AppBadge src={src} alt={alt} ariaLabel={ariaLabel} />
            </Grid>
         ))}
      </Grid>
   );

   return (
      <Section
         title="Learning Process"
         subTitle="Learn the latest skills to reach your professional goals"
         sx={{ backgroundColor: '#F3F3F3', pt: 10 }}
         sectionContent={sectionContent}
         wrappingContainerWidth="100%"
      />
   );
}
