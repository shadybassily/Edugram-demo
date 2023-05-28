import { popularCourses } from '../../../data';
import { SectionHeader } from '../../atoms';
import Section from '../../molecules/Section';


export default function MostPopular() {
   const handleItemClick = (card) => {
      console.log('fetching data for', card);
   };
   return (
      <Section
         title="Most Popular"
         subTitle="Learn the latest skills to reach your professional goals"
         sliderData={{type:'card', data:popularCourses}} // array of courses to display in the slider
         slidesToShow={{ sm: 1, md: 2, lg: 3, xl: 4 }}
         handleSliderItemClick={handleItemClick}
         sx={{ backgroundColor: '#F3F3F3' }}
      />
   );
}
