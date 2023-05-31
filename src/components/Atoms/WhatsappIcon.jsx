import { Link } from '@mui/material';
import whatsappIcon from 'src/assets/icons/whatsapp.svg';
export default function WhatsappIcon() {
   return (
      <Link sx={{ position: 'fixed', right: '25px', bottom: '10%', cursor: 'pointer' }}>
         <img src={whatsappIcon} />
      </Link>
   );
}
