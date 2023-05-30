import { useState } from 'react';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

export default function BookMark({ sx, item }) {
   const [isMarked, setIsMarked] = useState(false);

   const handleClick = (e, item) => {
      e.stopPropagation();

      if (isMarked) {
         setIsMarked(false);
         console.log('remove ', item, '   from bookmark list');
      } else {
         setIsMarked(true);
         console.log('add ', item, ' to bookmark list');
      }
   };

   return (
      <BookmarkRoundedIcon
         onClick={(e) => handleClick(e, item)}
         sx={{
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            p: 1,
            cursor: 'pointer',

            backgroundColor: isMarked ? 'white' : 'rgba(0, 0, 0, 0.2)',
            color: isMarked ? 'primary.main' : 'white',

            ...sx,
         }}
         fontSize="large"
      />
   );
}
