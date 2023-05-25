import { Card, CardContent, Typography, Box } from '@mui/material';

export default function CertificateCard({certificate}) {
  return (
    <Card sx={{ maxWidth: 280 }} >
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '250px',
                     boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                  }}
               >
                  <img
                     sx={{ height: 90, width: '170px', border: '1px solid black' }}
                     src={certificate.image}
                     title={certificate.name}
                  />
               </Box>
               <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <Typography
                     gutterBottom
                     variant="body1"
                     component="div"
                     fontSize="19px"
                     fontWeight="600"
                     color="#00000"
                  >
                     {certificate.name}
                  </Typography>
                  <Typography variant="body1" fontSize="20px" fontWeight="600" color="#343434">
                     {certificate.company}
                  </Typography>
               </CardContent>
            </Card>
  )
}
