   import image from "@assets/image/girls.jpeg"
   import image1 from "@assets/image/engineers.jpg"
   import image2 from "@assets/image/dpo1.jpg"
   import image3 from "@assets/image/prority.jpg"
  

  export  const programs = [
    {
      id: 1,
      title: 'Undergraduate Degree',
      image: image,
      description:
        'Students pursuing their first bachelor\'s degree. This includes freshmen, transfer students, and those returning to complete an undergraduate program.',
      linkText: 'Learn more about undergraduate admissions.',
      linkUrl: '#',
    },
    {
      id: 2,
      title: 'Post underGraduate',
      image: image,
      description:
        'For students seeking advanced knowledge and specialization beyond a bachelor\'s degree, typically focusing on a specific field of study.',
      linkText: 'Explore master\'s programs.',
      linkUrl: '#',
    },
    {
      id: 3,
      title: 'Master',
      image: image,
      description:
        'Programs designed for specific career paths, often providing certifications or associate degrees that bridge between undergraduate and master\'s studies.',
      linkText: 'Discover middle-level options.',
      linkUrl: '#',
    },
    {
      id: 4,
      title: 'PHD',
      image: image,
      description:
        'An advanced master\'s degree or a second master\'s degree, often with a focus on research or a highly specialized professional field.',
      linkText: 'View advanced master\'s degrees.',
      linkUrl: '#',
    },
  ];


   export const fees = [
    {
      id: 1,
      name: 'Tuition Fees',
      amount: '$25',
      description: 'to support programs and services at the Sun Devil Fitness Complex.',
    },
    {
      id: 2,
      name: 'Medical fees',
      amount: '$75',
      description: 'to build and refurbish common student spaces.',
    },
    {
      id: 3,
      name: 'Platform charges',
      amount: '$35',
      description: 'for programs that support the student experience.',
    },
    {
      id: 4,
      name: 'Health and Wellness fee',
      amount: '$55',
      description: 'for health and counseling services.',
    },
    {
      id: 5,
      name: 'Student Athletic fee',
      amount: '$75',
      description: 'to support Sun Devil Athletics (and get free tickets in return).',
    },
    {
      id: 6,
      name: 'College and school fees',
      amount: '', // No specific amount mentioned in the image
      description: 'These fees vary depending on your college. Check with them for more details.',
    },
    {
      id: 7,
      name: 'Surcharge fee',
      amount: '$24',
      description: 'This protects the university\'s ongoing financial health following the $24 million cut to ASU\'s budget enacted by the state legislature and governor of Arizona.',
    },
  ];

export   const articles = [

  {
    title: "Master’s degrees",
    description: "A master’s degree is a versatile, advanced graduate degree that typically takes 1-3 years to complete after your bachelor’s degree.With most programs offering the flexibility of a thesis or non-thesis option, you will be prepared for a more advanced level of professional work or further academic research.",
    imageUrl: image2
  },
  {
    title: "Doctoral degrees",
    description: "A doctoral or PhD degree is the highest academic degree you can earn. During your doctoral degree, you will conduct original research and contribute new knowledge to your field.Doctoral degree programs vary in length, and can be started after completing your bachelor’s degree or master’s degree.",
    imageUrl: image1
  },
];