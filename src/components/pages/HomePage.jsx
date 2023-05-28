import { useEffect, useState } from 'react';
import { useFetchCategoriesQuery, useLazyFetchCoursesQuery } from '../../store/api/categoryApi';
import { certificates } from '../../data';
import HomeTemplate from '../template/HomeTemplate';

export default function HomePage() {
   const [selectedCertificate, setSelectedCertificate] = useState(certificates[0]);
   console.log(selectedCertificate);
   const { data: categories, isFetching: isFetchingCategories } = useFetchCategoriesQuery();
   const [selectedCategory, setSelectedCategory] = useState(null);

   const [fetchCategoryCourses, { data: categoryCourses, isFetching: isCategoryCoursesLoading }] =
      useLazyFetchCoursesQuery();

   useEffect(() => {
      if (categories) setSelectedCategory(categories[0]);
   }, [categories]);

   useEffect(() => {
      if (selectedCategory) fetchCategoryCourses(selectedCategory.id);
   }, [selectedCategory]);

   return (
      <HomeTemplate
         categories={categories}
         isFetchingCategories={isFetchingCategories}
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
         categoryCourses={categoryCourses}
         isCategoryCoursesLoading={isCategoryCoursesLoading}
         selectedCertificate={selectedCertificate}
         setSelectedCertificate={setSelectedCertificate}
      />
   );
}
