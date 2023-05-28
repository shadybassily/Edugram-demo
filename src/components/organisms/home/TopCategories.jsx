import { Section, MediaCard } from '../../molecules';
import { SectionHeader } from '../../atoms';

import { useFetchCategoriesQuery, useLazyFetchCoursesQuery } from '../../../store/api/categoryApi';

export default function TopCategories() {
   const { isLoading, isError, data: categories, error, isFetching } = useFetchCategoriesQuery();
   const [trigger, { data: courses, isLoading: isCoursesLoading }] = useLazyFetchCoursesQuery();

   const handleItemClick = (item) => {
      console.log('fetching data for', item);
      trigger(item.id);
   };

   const action = () => {
      console.log('View more courses');
   };

   const SectionContent = () => (
      <Grid container justifyContent="space-around" gap={3}>
         {courses.map((course) => (
            <MediaCard
               key={course.id}
               item={course}
               onClick={() => console.log('Go to course: ', course)}
            />
         ))}
      </Grid>
   );

   if (isFetching) return <p>loading...</p>;

   return (
      <Section
         sectionHeader={
            <SectionHeader
               title="Top Categories"
               subTitle="Learn the latest skills to reach your professional goals"
            />
         }
         data={categories} // array of strings to display in the slider
         type="text"
         handleSliderItemClick={handleItemClick}
         // sectionContent={<SectionContent />}
         sectionActions={{ title: 'View More Courses', action }}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
