import {
   HomeHeader,
   LearningProcess,
   TopCategories,
   LearningBenefits,
   MostPopular,
   Clients,
   PopularCertificates,
} from '../organisms/home';

export default function HomeTemplate({
   categories,
   selectedCategory,
   setSelectedCategory,
   isFetchingCategories,
   fetchCategoryCourses,
   categoryCourses,
   isCategoryCoursesLoading,
   selectedCertificate,
   setSelectedCertificate,
}) {
   return (
      <>
         <HomeHeader />
         <LearningProcess />
         <TopCategories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isFetchingCategories={isFetchingCategories}
            fetchCategoryCourses={fetchCategoryCourses}
            categoryCourses={categoryCourses}
            isCategoryCoursesLoading={isCategoryCoursesLoading}
         />
         <LearningBenefits />
         <MostPopular />
         <Clients />
         <PopularCertificates
            selectedCertificate={selectedCertificate}
            setSelectedCertificate={setSelectedCertificate}
         />
      </>
   );
}
