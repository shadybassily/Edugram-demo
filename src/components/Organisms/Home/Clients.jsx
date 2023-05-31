import { Grid } from '@mui/material';

import apple from 'src/assets/clients/apple.png';
import ibm from 'src/assets/clients/ibm.png';
import google from 'src/assets/clients/Google.png';
import microsoft from 'src/assets/clients/microsoft.png';
import intel from 'src/assets/clients/intel.png';
import { Section } from 'components/Molecules';

const clientsIcons = [apple, intel, ibm, microsoft, google];
const sectionContent = (
   <Grid container justifyContent="space-between">
      {clientsIcons.map((client, i) => (
         <Grid
            item
            key={i}
            xs={6}
            sm={1}
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-evenly',
               p: 1,
            }}
         >
            <img src={client} />
         </Grid>
      ))}
   </Grid>
);

export default function Clients() {
   return <Section title="Our Clients" sectionContent={sectionContent} />;
}
