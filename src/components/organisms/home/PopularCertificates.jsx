import { Grid } from '@mui/material';

import Section from '../../molecules/Section';
import { certificates, certificatesCards } from '../../../data';
import CertificateCard from '../../molecules/CertificateCard';

export default function PopularCertificates({ selectedCertificate, setSelectedCertificate}) {
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
         title="Popular Certificates"
         subTitle="Break into a new field. No prior experience necessary to get started"
         sliderData={{ type: 'text', data: certificates }} // array of strings to display in the slider
         handleSliderItemClick={handleItemClick}
         sectionContent={sectionContent}
         sectionActions={{ title: 'View More Certificates', action }}
         selected={selectedCertificate}
         setSelected={setSelectedCertificate}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
