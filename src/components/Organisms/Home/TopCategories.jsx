import { Section, MediaCard } from 'components/Molecules';
import { Grid } from '@mui/material';

const handleSliderItemClick = (item) => {
   // do something with item
};

const action = () => {
   console.log('View more courses');
};

export default function TopCategories({
   categories,
   selectedCategory,
   setSelectedCategory,
   isFetchingCategories,
   categoryCourses = [],
   isCategoryCoursesLoading,
}) {
   const SectionContent = () => {
      return (
         <Grid container justifyContent="space-around" gap={3}>
            {categoryCourses.map((course) => (
               <MediaCard
                  key={course.product_id}
                  item={course}
                  onClick={() => console.log('Go to course: ', course)}
               />
            ))}
         </Grid>
      );
   };

   return (
      <Section
         title="Top Categories"
         subTitle="Learn the latest skills to reach your professional goals"
         sliderData={{ type: 'text', data: categories }}
         slidesToShow={{ sm: 1, md: 2, lg: 3, xl: 5 }}
         handleSliderItemClick={handleSliderItemClick}
         selected={selectedCategory}
         setSelected={setSelectedCategory}
         isSliderDataLoading={isFetchingCategories}
         sectionContent={<SectionContent />}
         isSectionContentLoading={isCategoryCoursesLoading}
         sectionActions={{ title: 'View More Courses', action }}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
