import Section from './Section';
import { MediaCard } from '../organisms';
import { courses } from '../../data';
import { Grid } from '@mui/material';
import { SectionHeader } from '../atoms';

const categories = ['Development', 'Design', 'Marketing', 'Business', 'Languages', 'More'];

export default function TopCategories() {
   const handleItemClick = (item) => {
      console.log('fetching data for', item);
   };

   const action = () => {
      console.log('View more courses');
   };

   const sectionContent = (
      <Grid container justifyContent="space-around" gap={3}>
         {courses.map((course) => (
            <MediaCard key={course.id} item={course} onClick={() => console.log('Go to course: ', course)} />
         ))}
      </Grid>
   );

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
         sectionContent={sectionContent}
         sectionActions={{ title: 'View More Courses', action }}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
