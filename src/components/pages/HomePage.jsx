import { Navbar } from '../organisms';
import {
   HeroSection,
   LearningProcess,
   TopCategories,
   Benefits,
   Footer,
   Clients,
   MostPopular,
   PopularCertificates,
} from '../template';


export default function HomePage() {
   return (
      <>
         <Navbar />
         <HeroSection />
         <LearningProcess />
         <TopCategories />
         <Benefits />
         <MostPopular />
         <Clients />
         <PopularCertificates />
         <Footer />
      </>
   );
}
