import Input from '@mui/material/Input';

export default function AppInput({ placeholder, sx, ...otherProps }) {
   return <Input placeholder={placeholder} disableUnderline fullWidth sx={sx} {...otherProps} />;
}
