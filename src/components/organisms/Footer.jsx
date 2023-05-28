import { Grid, Typography, IconButton, Link, Box } from '@mui/material';
import WrappingContainer from '../molecules/WrappingContainer';

import logo from '../../assets/icons/logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const platforms = [
   {
      name: 'facebook',
      icon: <FacebookRoundedIcon />,
      url: '',
   },
   {
      name: 'twitter',
      icon: <TwitterIcon />,
      url: '',
   },
   {
      name: 'youtube',
      icon: <YouTubeIcon />,
      url: '',
   },
   {
      name: 'linkedin',
      icon: <LinkedInIcon />,
      url: '',
   },
   {
      name: 'whatsapp',
      icon: <WhatsAppIcon />,
      url: '',
   },
];
const footerSections = [
   {
      title: 'Sitemap',
      links: [
         {
            name: 'Home',
            url: '',
         },
         {
            name: 'About us',
            url: '',
         },
         {
            name: 'Contact us',
            url: '',
         },
      ],
   },
   {
      title: 'Our Clients',
      links: [
         {
            name: 'IBM',
            url: '',
         },
         {
            name: 'Intell',
            url: '',
         },
         {
            name: 'Apple',
            url: '',
         },
      ],
   },
   {
      title: 'Support',
      links: [
         {
            name: 'Terms & Conditions',
            url: '',
         },
         {
            name: 'Privacy policy',
            url: '',
         },
      ],
   },
];
export default function Footer() {
   return (
      <Box>
         <WrappingContainer>
            <Grid container justifyContent="space-between" sx={{ py: 5 }}>
               <Grid
                  item
                  lg={3}
                  md={4}
                  sm={8}
                  xs={12}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}
               >
                  <img src={logo} width="85%" />
                  <Typography variant="body1">
                     Discover the fastest, most effective way to build your skills with courses,
                     certificates, and degrees. Get started with us.
                  </Typography>
                  <Box>
                     {platforms.map((platform, i) => (
                        <IconButton key={i} aria-label={platform.name} size="small" color="primary">
                           <Link href={platform.url}>{platform.icon}</Link>
                        </IconButton>
                     ))}
                  </Box>
               </Grid>

               {footerSections.map((section, i) => (
                  <Grid
                     key={i}
                     item
                     xs={12}
                     md={3}
                     lg={2}
                     sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                  >
                     <Typography color="primary" variant="h4">
                        {section.title}
                     </Typography>
                     {section.links.map((link, i) => (
                        <Typography key={i} variant="h6" component="p">
                           <Link underline="none" color="inherit" href={link.url}>
                              {link.name}
                           </Link>
                        </Typography>
                     ))}
                  </Grid>
               ))}
            </Grid>
         </WrappingContainer>

         <Box sx={{ backgroundColor: '#F3F3F3', py: 5, textAlign: 'center' }}>
            <Typography color="grey">Designed and developed at inova LLC</Typography>
         </Box>
      </Box>
   );
}
