import { Grid } from '@mui/material';

import Section from '../../molecules/Section';
import { SectionHeader } from '../../atoms';
import { certificates, certificatesCards } from '../../../data';
import CertificateCard from '../../molecules/CertificateCard';

export default function PopularCertificates() {
   const handleItemClick = (item) => {
      console.log('fetching data for', item);
   };

   const action = () => {
      console.log('View more certificates');
   };

   const sectionContent = (
      <Grid container justifyContent="space-around" gap={3}>
         {certificatesCards.map((certificate, i) => (
            <CertificateCard certificate={certificate} key={i} />
         ))}
      </Grid>
   );

   return (
      <Section
         sectionHeader={
            <SectionHeader
               title="Popular Certificates"
               subTitle="Break into a new field. No prior experience necessary to get started"
            />
         }
         data={certificates} // array of strings to display in the slider
         type="text"
         handleSliderItemClick={handleItemClick}
         sectionContent={sectionContent}
         sectionActions={{ title: 'View More Certificates', action }}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
