import { useState } from 'react';
import { Box } from '@mui/material';

import { AppButton } from '../atoms';
import { AppSlider } from '.';
import SliderText from '../atoms/SliderText';
import WrappingContainer from './WrappingContainer';
import MediaCard from './MediaCard';

export default function Section({
   sectionHeader,
   sectionContent,
   sectionActions,
   data,
   type, //text or card
   slidesToShow = { sm: 1, md: 2, lg: 3, xl: 4 },
   handleSliderItemClick,
   sx,
}) {
   const initialState = data ? data[0] : null;
   const [selected, setSelected] = useState(initialState);

   const sliderItems = () => {
      let items =
         type == 'text'
            ? data.map((item) => (
                 <SliderText
                    key={item}
                    item={item}
                    selected={selected}
                    setSelected={setSelected}
                    onClick={() => {
                       handleSliderItemClick(item);
                    }}
                 />
              ))
            : data.map((card) => (
                 <Box key={card.id} sx={{ height: '500px' }}>
                    <MediaCard
                       item={card}
                       sx={{ margin: '0 auto', height: '100%' }}
                       onClick={() => {
                          handleSliderItemClick(card);
                       }}
                    />
                 </Box>
              ));
      return items;
   };

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            py: 4,
            ...sx,
         }}
      >
         {sectionHeader}
         <WrappingContainer sx={{ gap: 5 }}>
            {data && <AppSlider items={sliderItems()} slidesToShow={slidesToShow} />}
            {sectionContent && sectionContent}

            {sectionActions && (
               <AppButton
                  variant="contained"
                  onClick={sectionActions.action}
                  sx={{ width: 'fit-content', margin: '0 auto' }}
               >
                  {sectionActions.title}
               </AppButton>
            )}
         </WrappingContainer>
      </Box>
   );
}
