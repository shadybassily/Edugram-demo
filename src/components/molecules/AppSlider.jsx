import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { NextArrow, PrevArrow } from '../atoms';
import { Box } from '@mui/material';

const breakPoints = {
   sm: 660,
   md: 900,
   lg: 1200,
   xl: 1536,
};
export default function AppSlider({ items, width = '100%', slidesToShow }) {
   const { sm, md, lg, xl } = slidesToShow;

   const settings = {
      slidesToShow: xl,
      slidesToScroll: 1,
      infinite: items.length > 3, //! only way to overcome the 2 rows bug
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
         {
            breakpoint: breakPoints.xl,
            settings: {
               slidesToShow: xl,
            },
         },
         {
            breakpoint: breakPoints.lg,
            settings: {
               slidesToShow: lg,
            },
         },
         {
            breakpoint: breakPoints.md,
            settings: {
               slidesToShow: md,
            },
         },
         {
            breakpoint: breakPoints.sm,
            settings: {
               slidesToShow: sm,
            },
         },
      ],
   };

   return (
      <Box sx={{ width}}>
         <Slider {...settings}>{items}</Slider>
      </Box>
   );
}
