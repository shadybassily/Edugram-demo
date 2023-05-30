import { Box } from '@mui/material';

import { AppButton, SectionHeader } from '../Atoms';
import { AppSlider } from '.';
import SliderText from '../Atoms/SliderText';
import WrappingContainer from './WrappingContainer';
import MediaCard from './MediaCard';

export default function Section({
   title,
   subTitle,
   sliderData,
   slidesToShow = { sm: 1, md: 2, lg: 3, xl: 4 },
   handleSliderItemClick,
   selected,
   setSelected,
   isSliderDataLoading = false,
   sectionContent,
   isSectionContentLoading,
   sectionActions,
   wrappingContainerWidth = '90%',
   sx,
}) {
   const sliderItems = () => {
      const { type, data } = sliderData;
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
                 <Box key={card.product_id} sx={{ height: '500px' }}>
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
      <Box sx={{ display: 'flex', flexDirection: 'column', py: 4, ...sx }}>
         {/* 1. header */}
         <SectionHeader title={title} subTitle={subTitle} />
         <WrappingContainer sx={{ gap: 5, width: wrappingContainerWidth }}>
            {/* 2. slider */}
            {isSliderDataLoading
               ? 'Loading'
               : sliderData && <AppSlider items={sliderItems()} slidesToShow={slidesToShow} />}
            {/* 3. content */}
            {isSectionContentLoading ? 'Loading' : sectionContent && sectionContent}
            {/* actions */}
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
