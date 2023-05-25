import { Grid } from '@mui/material';

import { AppBadge, SectionHeader } from '../atoms';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import { learningProcess } from '../../data';
import Section from './Section';


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

   const sectionHeader = (
      <SectionHeader
         title="Learning Process"
         subTitle="Learn the latest skills to reach your professional goals"
         sx={{ backgroundColor: '#F3F3F3', pt: 10 }}
      >
         <img src={whatsappIcon} style={{ position: 'absolute', right: '25px', top: '20px' }} />
      </SectionHeader>
   );

   return <Section sectionHeader={sectionHeader} sectionContent={sectionContent} />;
}
