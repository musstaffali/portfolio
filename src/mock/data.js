import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mustafa Mustafa',
  subtitle: 'FullStack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.png',
  paragraphOne:
    "Hi all! I'm Mustafa, a Full Stack Development Graduate Student at UPenn LPS Coding Bootcamp. An intensive 12-week-long bootcamp, dedicated to designing and building web applications. (Grad Nov. 2020). ",
  paragraphTwo:
    "As a Full-Stack Student and aspiring Software Engineer, I'm excited to utilize technology to foster growth, development, and progress while also acknowledging the importance of interpersonal work toward equity and betterment. I'm particularly passionate about AI and Machine Learning--and the many opportunities in pairing them to solve global issues.",
  paragraphThree:
    'Skills: HTML3, CSS3, jQuery, Gatsby, Bootstrap, Firebase, JavaScript, React.js, Angular, Express.js, Handlebars, Node.js, MongoDB, MySQL, and API Integration ',
  resume: 'https://drive.google.com/file/d/1xFwNa40E6CTMJdkIDdSu1sPjqI8SmsHZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'stocks.png',
    title: 'WhatDaStock',
    info:
      'The StockFinder website, which we called "What the Stock", was our first collaborative coding project.',
    info2:
      'Reasearch company stocks as well as top trending stocks. Allows users to add there favorite list for future easy access. Users can refer to resource are for key terms and links to websites of interest.',
    url: ' https://rachelkline.github.io/WhatTheStock/',
    repo: 'https://github.com/musstaffali/StockFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Rest.png',
    title: 'Restaurant Finder',
    info:
      "An application that allows the users to search for a restaurant using city and the app will return the results with the restaurant name, address, and menu and also it will pinpoint the restaurant's location via Google Maps",
    info2: '',
    url: 'https://findtherestaurant500.herokuapp.com/',
    repo: 'https://github.com/musstaffali/project-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'savedatamoney.png',
    title: 'Save Dat Money',
    info: 'A budget tracker application that allows for offline access and functionality',
    info2:
      'This app is based on MongoDB, Webmanifest, service-worker, Express, Morgan, IndexedDB, and Cache.',
    url: 'https://savedatcurrency.herokuapp.com/',
    repo: 'https://github.com/musstaffali/save-dat-money', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'staff.jpg',
    title: 'Staff Directory',
    info:
      "An employee directory application made with React. The application's UI is broken into components that manage component states and respond to user events. The user can view their entire employee directory at once, or search for a specific employee.",
    info2: '',
    url: 'https://staffdatabase.herokuapp.com',
    repo: 'https://github.com/musstaffali/staffDirectory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Nike.png',
    title: 'Nike Tracker',
    info:
      'Just Do It Nike tracker app allows user to view, create, and track daily workouts. User is able to view workout or create new workouts to track. A dashboard with details of the workouts per day tracked is displayed in several graphs and charts to show the varying progress of the workouts.',
    info2:
      'A mongo database is created to keep track of all the results using mongoose schema and html and api routes are handled using expressjs.',
    url: 'https://justdoit-tracker.herokuapp.com/',
    repo: 'https://github.com/musstaffali/nike_Tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mamusstaffali@gmai.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/StaffFromAfrica',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mustafa-inc/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/musstaffali',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
