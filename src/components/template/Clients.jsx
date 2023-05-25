import { Grid, Link, Typography } from '@mui/material';

import apple from '../../assets/clients/apple.png';
import ibm from '../../assets/clients/ibm.png';
import google from '../../assets/clients/Google.png';
import microsoft from '../../assets/clients/microsoft.png';
import intel from '../../assets/clients/intel.png';
import Section from './Section';
import { SectionHeader } from '../atoms';

const clientsIcons = [apple, intel, ibm, microsoft, google];
const clients = clientsIcons.map((client, i) => (
   <Grid
      key={i}
      item
      sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-evenly',
         p: 1,
      }}
      xs={6}
      sm={1}
   >
      <img src={client} />
   </Grid>
));

const sectionContent = (
   <Grid container justifyContent="space-between">
      {clients}
   </Grid>
);

const sectionHeader = (
   <SectionHeader title="Our Clients">
      <Typography variant="h5">
         <Link underline="none" href="#" sx={{ position: 'absolute', right: '25px', top: '0' }}>
            View All
         </Link>
      </Typography>
   </SectionHeader>
);

export default function Clients() {
   return <Section sectionHeader={sectionHeader} sectionContent={sectionContent} />;
}
