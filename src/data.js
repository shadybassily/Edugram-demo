import courseImage1 from './assets/courses/top categories/course1.png';
import courseImage2 from './assets/courses/top categories/course2.png';
import courseImage3 from './assets/courses/top categories/course3.png';
import courseImage4 from './assets/courses/top categories/course4.png';

import popular1 from './assets/courses/popular/popular1.png';
import popular2 from './assets/courses/popular/popular2.png';
import popular3 from './assets/courses/popular/popular3.png';

import googleCertificate from './assets/certificates/google.png';
import googleCloudCertificate from './assets/certificates/googleCloud.png';
import ibmCertificate from './assets/certificates/ibm.png';

import chooseCourse from './assets/icons/choose-course.svg';
import startLearning from './assets/icons/start-learning.svg';
import getCertificate from './assets/icons/get-certificate.svg';

const learningProcess = [
   { src: chooseCourse, alt: 'Choose Course', ariaLabel: 'Choose Course' },
   { src: startLearning, alt: 'Start Learning', ariaLabel: 'Start Learning' },
   { src: getCertificate, alt: 'Get Certificate', ariaLabel: 'Get Certificate' },
];

const popularCourses = [
   {
      product_id: 1,
      classified_product: {
         title: 'User Experience Design Essentials - Adobe XD UI UX Design',
         description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
         instructors: ['Melvin Owens', 'Roberts Andrei', 'Jose Portila'],

         image_url: popular1,
      },

      final_rating_from_reviews: 4.7,
      reviews_number: 1.988,

      original_price: 40.99,
      price_after_discount: 17.99,
      original_price_currency: 'EGP',
   },
   {
      product_id: 2,
      classified_product: {
         title: 'Digital Marketing',
         description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
         instructors: ['Melvin Owens', 'Roberts Andrei', 'Jose Portila'],

         image_url: popular2,
      },

      final_rating_from_reviews: 4.7,
      reviews_number: 1.988,

      price_after_discount: 17.99,
      original_price: 40.99,
      original_price_currency: 'EGP',
   },
   {
      product_id: 3,
      classified_product: {
         title: 'HTML, CSS, and Javascript for Web Developers',
         description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
         instructors: ['Melvin Owens', 'Roberts Andrei', 'Jose Portila'],

         image_url: popular3,
      },
      final_rating_from_reviews: 4.7,
      reviews_number: 1.988,

      price_after_discount: 17.99,
      original_price: 40.99,
      original_price_currency: 'EGP',
   },
   {
      product_id: 4,
      classified_product: {
         title: 'User Experience Design Essentials - Adobe XD UI UX Design',
         description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
         instructors: ['Melvin Owens', 'Roberts Andrei', 'Jose Portila'],

         image_url: popular1,
      },

      final_rating_from_reviews: 4.7,
      reviews_number: 1.988,

      original_price: 40.99,
      price_after_discount: 17.99,
      original_price_currency: 'EGP',
   },
   {
      product_id: 5,
      classified_product: {
         title: 'Digital Marketing',
         description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
         instructors: ['Melvin Owens', 'Roberts Andrei', 'Jose Portila'],

         image_url: popular2,
      },

      final_rating_from_reviews: 4.7,
      reviews_number: 1.988,

      price_after_discount: 17.99,
      original_price: 40.99,
      original_price_currency: 'EGP',
   },
   {
      product_id: 6,
      classified_product: {
         title: 'HTML, CSS, and Javascript for Web Developers',
         description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
         instructors: ['Melvin Owens', 'Roberts Andrei', 'Jose Portila'],

         image_url: popular3,
      },
      final_rating_from_reviews: 4.7,
      reviews_number: 1.988,

      price_after_discount: 17.99,
      original_price: 40.99,
      original_price_currency: 'EGP',
   },
];

const certificates = [
   {
      name: 'Master Track Certificates',
   },
   {
      name: 'IT Certificates',
   },
   {
      name: 'University Certificates',
   },
   {
      name: 'Master Certificates',
   },
   {
      name: 'More',
   },
];

const certificatesCards = [
   {
      image: googleCertificate,
      name: 'Google IT Support Professional Certificate',
      company: 'Google',
   },
   {
      image: ibmCertificate,
      name: 'IBM Cybersecurity Analyst Professional Certificate',
      company: 'IBM',
   },
   {
      image: googleCloudCertificate,
      name: 'Cloud Security Engineer Professional Certificate',
      company: 'Google Cloud',
   },
   {
      image: ibmCertificate,
      name: 'IBM Cybersecurity Analyst Professional Certificate',
      company: 'IBM',
   },
];

export { learningProcess, popularCourses, certificates, certificatesCards };
