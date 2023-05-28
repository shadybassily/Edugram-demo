import {
   HeroSection,
   LearningProcess,
   TopCategories,
   LearningBenefits,
   MostPopular,
   Clients,
   PopularCertificates,
} from '../organisms/home';

export default function HomeTemplate() {
   return (
      <>
         <HeroSection />
         <LearningProcess />
         <TopCategories />
         <LearningBenefits />
         <MostPopular />
         <Clients />
         <PopularCertificates />
      </>
   );
}
