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


const courses = [
   {
      id: 1,
      image: courseImage1,
      title: 'User Experience Design Essentials - Adobe XD UI UX Design',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 2,
      image: courseImage2,
      title: 'Motion Graphic',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 3,
      image: courseImage3,
      title: 'The Ultimate Drawing Course - Beginner to Advanced',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 4,
      image: courseImage4,
      title: 'Introduction to Graphic Design',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
];

const popularCourses = [
   {
      id: 1,
      image: popular1,
      title: 'Big Data, and Machine Learning on GCP by Google Cloud',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 2,
      image: popular2,
      title: 'Digital Marketing',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 3,
      image: popular3,
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 4,
      image: popular1,
      title: 'Big Data, and Machine Learning on GCP by Google Cloud',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 5,
      image: popular2,
      title: 'Digital Marketing',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
   {
      id: 6,
      image: popular3,
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 4.7,
      numOfRatings: 1.988,
      tutors: 'Melvin Owens, Roberts Andrei, Jose Portila',
      description:
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      newPrice: 17.99,
      oldPrice: 40.99,
   },
];

const certificates = [
   'Master Track Certificates',
   'IT Certificates',
   'University Certificates',
   'Master Certificates',
   'More',
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

export { learningProcess, courses, popularCourses, certificates, certificatesCards };
