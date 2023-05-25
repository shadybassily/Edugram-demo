import { popularCourses } from '../../data';
import { SectionHeader } from '../atoms';
import Section from './Section';

export default function MostPopular() {
   const handleItemClick = (card) => {
      console.log('fetching data for', card);
   };
   return (
      <Section
         sectionHeader={
            <SectionHeader
               title="Most Popular"
               subTitle="Learn the latest skills to reach your professional goals"
            />
         }
         data={popularCourses} // array of courses to display in the slider
         type="card"
         slidesToShow={{ sm: 1, md: 2, lg: 3, xl: 4 }}
         handleSliderItemClick={handleItemClick}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
