import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useTheme } from '@mui/material/styles';

function AppArrow({props,Arrow}) {
   const { className, style, onClick } = props;
   const theme = useTheme();
   const { primary } = theme.palette;
   const arrowStyle = {
      color: primary.main,
      stroke: primary.main,
      fontSize: '35px',
   };

   return <Arrow className={className} style={{ ...arrowStyle, ...style }} onClick={onClick} />;
}

function NextArrow(props) {
   return <AppArrow Arrow={ArrowForwardIosRoundedIcon} props={props} />;
}

function PrevArrow(props) {
   return <AppArrow Arrow={ArrowBackIosNewRoundedIcon} props={props} />;
}

export { NextArrow, PrevArrow };
