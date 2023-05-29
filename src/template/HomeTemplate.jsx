import {
   HomeHeader,
   LearningProcess,
   TopCategories,
   LearningBenefits,
   MostPopular,
   Clients,
   PopularCertificates,
} from '../components/organisms/home';

export default function HomeTemplate({
   categories,
   selectedCategory,
   setSelectedCategory,
   isFetchingCategories,
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
