import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useTheme } from '@mui/material/styles';

function SliderArrow({ props, Arrow }) {
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
   return <SliderArrow Arrow={ArrowForwardIosRoundedIcon} props={props} />;
}

function PrevArrow(props) {
   return <SliderArrow Arrow={ArrowBackIosNewRoundedIcon} props={props} />;
}

export { NextArrow, PrevArrow };
