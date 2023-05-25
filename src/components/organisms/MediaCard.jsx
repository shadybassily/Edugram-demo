import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTheme } from '@mui/material/styles';

import { MediaCardButton, Price, Rate, BookMark } from '../atoms/card';

// image={course.image}
//                title={course.title}
//                rating={course.rating}
//                numOfRatings={course.numOfRatings}
//                description={course.description}
//                tutors={course.tutors}
//                newPrice={course.newPrice}
//                oldPrice={course.oldPrice}

export default function MediaCard({ item, onClick, sx }) {
   const {
      image,
      title,
      rating,
      numOfRatings,
      description,
      tutors,
      newPrice,
      oldPrice,

   } = item;
   const theme = useTheme();

   const cardStyle = {
      width: '320px',
      [theme.breakpoints.up('md')]: {
         width: '280px',
      },
      [theme.breakpoints.up('xl')]: {
         width: '320px',
      },
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      borderRadius: '20px',
      textAlign: 'start',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
   };

   return (
      <Card sx={cardStyle} onClick={onClick}>
         <BookMark sx={{ position: 'absolute', right: '15px', top: '15px' }} item={item}/>
         <CardMedia sx={{ height: ' 200px' }} image={image} title={title} />

         <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography gutterBottom component="div" sx={{ fontSize: '16px' }}>
               {title}
            </Typography>

            <Rate rating={rating} numOfRatings={numOfRatings} />
            <Typography variant="body2" color="text.secondary" noWrap>
               {tutors}
            </Typography>

            <Typography
               gutterBottom
               variant="body2"
               color="text.secondary"
               sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
               }}
            >
               {description}
            </Typography>

            <Price newPrice={newPrice} oldPrice={oldPrice} />
         </CardContent>

         <CardActions sx={{ marginTop: 'auto', display: 'flex', gap: '10px', pb: 3 }}>
            <MediaCardButton sx={{ width: '100%' }}>Enroll Now</MediaCardButton>
            <MediaCardButton>
               <ShoppingCartOutlinedIcon />
            </MediaCardButton>
         </CardActions>
      </Card>
   );
}
