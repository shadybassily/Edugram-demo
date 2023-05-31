import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { MediaCardButton, Price, Rate, BookMark } from 'components/Atoms/card';

export default function MediaCard({ item, onClick, sx }) {
   const {
      classified_product: { title, description, instructors, image_url },
      original_price,
      price_after_discount,
      original_price_currency,
      final_rating_from_reviews,
      reviews_number,
   } = item;

   const cardStyle = {
      width: { xs: '320px', md: '280px', xl: '320px' },
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
         <BookMark sx={{ position: 'absolute', right: '15px', top: '15px' }} item={item} />
         <CardMedia sx={{ height: ' 200px' }} image={image_url} title={title} />

         <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography gutterBottom component="div" sx={{ fontSize: '16px' }}>
               {title}
            </Typography>

            <Rate rating={final_rating_from_reviews} numOfRatings={reviews_number} />

            <Typography variant="body2" color="text.secondary" noWrap>
               {instructors.map((instructor) => instructor.name).join('')}
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

            <Price
               newPrice={price_after_discount}
               oldPrice={original_price}
               currency={original_price_currency}
            />
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
