import { Grid, Link, Typography } from '@mui/material';

import apple from '../../../assets/clients/apple.png';
import ibm from '../../../assets/clients/ibm.png';
import google from '../../../assets/clients/Google.png';
import microsoft from '../../../assets/clients/microsoft.png';
import intel from '../../../assets/clients/intel.png';
import Section from '../../molecules/Section';
import { SectionHeader } from '../../atoms';

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

export default function Clients() {
   return (
      <Section title="Our Clients" sectionContent={sectionContent} />
   );
}
