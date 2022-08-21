import twitter from '../Assets/screenshots/twitter.png';
import instagram from '../Assets/screenshots/link.png';
import uber from '../Assets/screenshots/disney.png';
import amazon from '../Assets/screenshots/amazon.png';
import you from '../Assets/screenshots/you.png';
import alzheimer from '../Assets/screenshots/alzheimer.png';
import movie from '../Assets/screenshots/movie.png';
import fake from '../Assets/screenshots/fake.png';
import potato from '../Assets/screenshots/potato.png';

export const projects = [
  {
    name: 'Twitter Clone',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLWkYA5aH0M617I2FQ0WaZ1fIcxNYjicZl-nyOuP9zhNrEE8KLywe3GN9ai5htynOjKQ4Zrja1QIqEq4FSIN0DPBGwFnylh3zwVSE1nkVxbzV5gyKncB0q2Yuy9m3ka_V0XEdALczQqECLlsnrm4P4uD=w1834-h879-no",
    image: twitter,
    content:
      'A clone of twitter with Next Auth sign in and ability to share tweets connected to firebase backend',
    site: 'https://twitter-clone-kappa-six.vercel.app/',
    github: 'https://github.com/SumanthGoud017/twitter-clone',
    tags: [
      {
        name: 'Next',
        color: 'gray',
      },
      {
        name: 'Firebase',
        color: 'orange',
      },
      {
        name: 'Tailwind',
        color: 'blue',
      },
      {
        name: 'NextAuth',
        color: 'violet',
      },
    ],
  },
  {
    name: 'Disney + ',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLWe-15-aYxdIlvqy4QdKT3t0cMR4cR1GfWBDVPG5_lR56N9_5Yuxh32i835noPBf72jpVeaWNuVZHqO1LRuYlJWWkEHzNdcbCrlW1D9bIbVslOTS0_ZTQgWdEzR1VOiiIcI4GWoGrKfWi5mnNAFV6rZ=w407-h879-no",
    image: uber,
    content:
      'A Clone of Disney +  made with Nextjs with integration of TMDB API. In this clone all the Movies, Tv shows are Server Side Rendered.',
    site: 'https://disneyplus-ten.vercel.app/',
    github: 'https://github.com/SumanthGoud017/disneyplus',
    tags: [
      {
        name: 'NextJS SRR',
        color: 'blue',
      },
      {
        name: 'TMDB API',
        color: 'orange',
      },
      {
        name: 'Tailwind CSS',
        color: 'blue',
      },
      {
        name: 'FireBase',
        color: 'orange',
      },
    ],
  },

  {
    name: 'LinkedIn',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLXujnkeDkApEtzlfOH6meFfn8uL636zwvC9w64R6guVWamU4Xmc6bQddNPcx6pKqaU1tX3tt7JKuMnDlRkwA60wHZEfDwhczbKK4sUknHTNMzNNBudPkwkq8CGFrWMa54e4wRYfPJAucKHbd8KXv_xx=w1849-h879-no",
    image: instagram,
    content:
      'A Clone of LinkedIn which includes Next Auth sign in with the ability to share posts connected with MongoDB backend',
    site: 'https://linkedin-clone-lac.vercel.app/',
    github: 'https://github.com/SumanthGoud017/linkedin-clone',
    tags: [
      {
        name: 'NextJS',
        color: 'gray',
      },

      {
        name: 'Tailwind CSS',
        color: 'blue',
      },
      {
        name: 'Recoil',
        color: 'orange',
      },
      {
        name: 'MongoDB',
        color: 'gray',
      },
    ],
  },
  {
    name: 'Amazon Clone',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLX9GTMKL5PtLGzDJOxb1SbmO3TXP0LugpLAEUlso6W1cqEqdLnpsYRdpgttHjQXaX32lfqylm6fP4OVkfoVpsraSWOE7m0aijj3Bf9Mw5q4G9iIAvQSeoXSQ9A_cUKPgr8oMYzfhuUtT7hcNVpEd0X8=w1834-h879-no",
    image: amazon,
    content:
      'A Clone of Amazon which includes Next Auth Sign In and Add to Cart Functionality',
    site: 'https://amazone-clone-pi.vercel.app/',
    github: 'https://github.com/SumanthGoud017/amazone-clone',
    tags: [
      {
        name: 'NextJS',
        color: 'gray',
      },
      {
        name: 'Firebase',
        color: 'orange',
      },
      {
        name: 'Tailwind CSS',
        color: 'blue',
      },
    ],
  },
  {
    name: 'Sales Insights Data Analysis Project',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLX9GTMKL5PtLGzDJOxb1SbmO3TXP0LugpLAEUlso6W1cqEqdLnpsYRdpgttHjQXaX32lfqylm6fP4OVkfoVpsraSWOE7m0aijj3Bf9Mw5q4G9iIAvQSeoXSQ9A_cUKPgr8oMYzfhuUtT7hcNVpEd0X8=w1834-h879-no",
    image: you,
    content:
      'A Power BI Project for building powerful Visualization Dashboard.From this Power BI dashboard any one can track companies revenue numbers, revenue trends, sales quantity numbers , revenue breakdown by regions , by different products and so on . ',
    site: 'https://drive.google.com/drive/u/3/folders/1hNQH63w9gD3mvPsdAKxoLawKJ0rXGCXN',
    Github:
      'https://drive.google.com/drive/u/3/folders/1hNQH63w9gD3mvPsdAKxoLawKJ0rXGCXN',
    tags: [
      {
        name: ' Microsoft Power BI',
        color: 'gray',
      },
    ],
  },
  {
    name: 'Neurological disease Detection',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLX9GTMKL5PtLGzDJOxb1SbmO3TXP0LugpLAEUlso6W1cqEqdLnpsYRdpgttHjQXaX32lfqylm6fP4OVkfoVpsraSWOE7m0aijj3Bf9Mw5q4G9iIAvQSeoXSQ9A_cUKPgr8oMYzfhuUtT7hcNVpEd0X8=w1834-h879-no",
    image: alzheimer,
    content:
      'A Deep Learning Model which predicts Level of Dementia and Neurological Disease . Used Mri Images To train this model.',
    site: 'https://drive.google.com/drive/u/3/folders/1j8zvVeAUl-81NcFvjvwmr02qnQ5Q84Da',
    github:
      'https://drive.google.com/drive/u/3/folders/1j8zvVeAUl-81NcFvjvwmr02qnQ5Q84Da',
    tags: [
      {
        name: 'CNN',
        color: 'gray',
      },
      {
        name: 'MRI dataset',
        color: 'orange',
      },
    ],
  },
  {
    name: 'Movie Recommendation system',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLX9GTMKL5PtLGzDJOxb1SbmO3TXP0LugpLAEUlso6W1cqEqdLnpsYRdpgttHjQXaX32lfqylm6fP4OVkfoVpsraSWOE7m0aijj3Bf9Mw5q4G9iIAvQSeoXSQ9A_cUKPgr8oMYzfhuUtT7hcNVpEd0X8=w1834-h879-no",
    image: movie,
    content:
      'This System is content based on a certain amount of popularity based Recommendation system .User can give name of his favourite movie and based on the input ,system recommends certain movies . ',
    site: 'https://drive.google.com/drive/u/3/folders/19tlTLCwhocVcsAvmQvL14stexamrn3j0',
    github:
      'https://drive.google.com/drive/u/3/folders/19tlTLCwhocVcsAvmQvL14stexamrn3j0',
    tags: [
      {
        name: 'Cosine Similarity Algorithm',
        color: 'gray',
      },
    ],
  },
  {
    name: 'Fake News Prediction',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLX9GTMKL5PtLGzDJOxb1SbmO3TXP0LugpLAEUlso6W1cqEqdLnpsYRdpgttHjQXaX32lfqylm6fP4OVkfoVpsraSWOE7m0aijj3Bf9Mw5q4G9iIAvQSeoXSQ9A_cUKPgr8oMYzfhuUtT7hcNVpEd0X8=w1834-h879-no",
    image: fake,
    content:
      'Used Textual data and Logistic Regression model for prediction. It Predicts whether the news article is real or fake  ',
    site: 'https://drive.google.com/drive/u/3/folders/1rylbH_OuNAZI-Xt5L1rD_q6XdvC2lKz6',
    github:
      'https://drive.google.com/drive/u/3/folders/1rylbH_OuNAZI-Xt5L1rD_q6XdvC2lKz6',
    tags: [
      {
        name: 'Logistic Regression',
        color: 'gray',
      },
      {
        name: 'Textual data ',
        color: 'orange',
      },
    ],
  },
  {
    name: 'Potato Disease Classification',
    // image:
    //   "https://lh3.googleusercontent.com/pw/AM-JKLX9GTMKL5PtLGzDJOxb1SbmO3TXP0LugpLAEUlso6W1cqEqdLnpsYRdpgttHjQXaX32lfqylm6fP4OVkfoVpsraSWOE7m0aijj3Bf9Mw5q4G9iIAvQSeoXSQ9A_cUKPgr8oMYzfhuUtT7hcNVpEd0X8=w1834-h879-no",
    image: potato,
    content:
      'Image classification Project used CNN and created a mobile app using  React Native in which a farmer can take picture and app will Predict that plant has a disease or not.',
    site: 'https://drive.google.com/drive/u/3/folders/16cuGjM8HN_0-ZoQg8Abv8zxmEkmpazzd',
    github:
      'https://drive.google.com/drive/u/3/folders/16cuGjM8HN_0-ZoQg8Abv8zxmEkmpazzd',
    tags: [
      {
        name: 'CNN',
        color: 'gray',
      },
      {
        name: 'React Native',
        color: 'orange',
      },
    ],
  },
];
